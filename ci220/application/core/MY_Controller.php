<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class MY_Controller extends CI_Controller {
  
  function __construct( ) {
      parent::__construct( );
  
  
  	if ( $this->db->dbdriver === 'postgre' ) {
	    $this->qb = ' "';
	    $this->qe = '" ';
	    $this->qv = '"::varchar ';
	    $this->like = '::varchar ilike ';
	    function escape_string( $s ) {
	      return pg_escape_string( $s );
	    }
	  } else 	if ( $this->db->dbdriver === 'mysql' || $this->db->dbdriver === 'mysqli'  ) {
	    $this->qb = ' `';
	    $this->qe = '` ';
	    $this->qv = '` ';
	    $this->like = ' like ';
	    function escape_string( $s ) {
	      return mysql_real_escape_string( $s );
	    }
	  } else {
	    $this->qb = ' "';
	    $this->qe = '" ';
	    $this->qv = '" ';
	    $this->like = ' like ';
	    function escape_string( $s ) {
	      return addslashes( $s );
	    }
  	}
  	$this->db->query( 'SET NAMES \'UTF8\';' );
  }
  
}

class REST_Controller extends MY_Controller {

  const VIEW = '';
  
  protected $action;
  protected $contents;

  public static $UPDATABLE;
  
  function __construct( ) {
    parent::__construct( );
    $this->action = $this->get_action( );
    $this->contents = $this->get_contents( );
  }

  function test( $msg ) {
    die( $msg );
  }

  public function collection( $id=NULL ) {
    if ( $this->action === 'create' ) {
      $this->test( 'REST create not provided for collection' );
    } else if ( $this->action === 'read' ) {
      $this->read_collection( $id );
    } else if ( $this->action === 'update' ) {
      $this->test( 'REST update not provided for collection' );
    } else if ( $this->action === 'delete' ) {
      $this->test( 'REST delete not provided for collection' );
    }
  }

  public function model( $id=NULL ) {
    if ( $this->action === 'create' ) {
      $this->create( );
    } else if ( $this->action === 'read' ) {
      $this->read( $id );
    } else if ( $this->action === 'update' ) {
      $this->update( $id );
    } else if ( $this->action === 'delete' ) {
      $this->delete( $id );
    }
  }

  protected function _create( $fields, $sid = 'id', $print = true ) {
  // require: $model['id'] NOT set (by REST API from Backbone.js)
    if ( isset(static::$UPDATABLE) && count(static::$UPDATABLE) > 0 ) {
	  	$model = $this->from_json( $this->contents, array_merge(static::$UPDATABLE, static::$KEY ) );
  	} else {
		  $model = $this->from_json( $this->contents, $fields );
	  }
    //$model = $this->from_json( $this->contents, $fields );
    $this->db->insert( $this->get_table_name( ), $model );
    if ( $this->db->affected_rows( ) === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not inserted"}' );
    }
    $id = $this->db->insert_id();
    return $this->read( $id, $print);
  }

  protected function _create_with_id( $fields, $sid = 'id', $print = true ) {
  // require: $model['id'] NOT set (by REST API from Backbone.js)

    $model = $this->from_json( $this->contents );
    $where = $this->assoc_fields( $model, static::$KEY );
    $query = $this->db->get_where( $this->get_table_name( ), $where );
    if ( $query->num_rows( ) !== 0 ) {
        $this->error_model_header( );
        die( "{\"error\":\"SQL - dupplicate key}'\"}" );
    }
    if ( isset(static::$UPDATABLE) && count(static::$UPDATABLE) > 0 ) {
	  	$model = $this->from_json( $this->contents, array_merge(static::$UPDATABLE, static::$KEY ) );
  	} else {
	    $model = $this->from_json( $this->contents, $fields );
	}
    //$model = $this->assoc_fields( $model, $fields );
    //$this->_before_insert( $model );
    $this->db->insert( $this->get_table_name( ), $model );
    if ( $this->db->affected_rows( ) === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not inserted"}' );
    }
    $id = $this->key_json( $model );
    $model = $this->read( $id, false);
    if ( $sid === '_sur' )
      $model['_sur'] = $this->key_json( $model );
	if ( $print ) {
	  echo $this->to_json( $model );
    } else {
	  return $model;
	}
  }

  protected function _create_with_next_id( $fields, $sid = 'id', $print = true ) {
  // require: $model['id'] NOT set (by REST API from Backbone.js)
    $model = $this->from_json( $this->contents );
    //$where = $this->assoc_fields( $model, static::$KEY );
    $query = $this->db->select_max( static::$KEY[0] )->get( $this->get_table_name( ) );
    $result = $query->row_array( 0 );
    $realsid = str_replace( '`', '', str_replace( '"', '', static::$KEY[0] ) );
    if ( isset(static::$UPDATABLE) && count(static::$UPDATABLE) > 0 ) {
	  	$model = $this->from_json( $this->contents, array_merge(static::$UPDATABLE, static::$KEY ) );
  	} else {
		$model = $this->from_json( $this->contents, $fields );
	}
    $model[$realsid] = 1 + $result[$realsid];
    //print_r($model);die();
    //$model = $this->assoc_fields( $model, $fields );
    $this->_before_insert( $model, $model[$realsid] );
    $this->db->insert( $this->get_table_name( ), $model );
    if ( $this->db->affected_rows( ) === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not inserted"}' );
    }
    $id = $this->key_json( $model );
    $model = $this->read( $id, false);
    if ( $sid === '_sur' )
      $model['_sur'] = $this->key_json( $model );
    if ( $print ) {
	  echo $this->to_json( $model );
	} else {
	  return $model;
	}
  }
 
  protected function _before_insert( &$model, $id=NULL ) {;}
  protected function _before_update( &$model ) {;}
  
  protected function _read( $fields, $id, $sid='id', $print=true ) {
  // requires: $id IS set ($sid is name key column in real SQL table)
  // output: $model['id'] IS set AND $model[$sid] IS set AND ===
    $values = json_decode( rawurldecode( $id ) );
    if ( ! is_array( $values ) )
      $values = array( $id );
    $where = array_combine( static::$KEY, $values );
    $query = $this->db->select( $fields )->get_where( $this->get_view_name( ), $where, 1 /* LIMIT 1 */ );
    if ( $query->num_rows( ) === 1 ) {
      $model = $query->row_array( 0 );
      if ( $sid === '_sur' ) {
        $model['_sur'] = $this->key_json( $model );
      }
    } else {
      $model = array( );
      $this->error_model_header( ); 
      die( '{"error":"SQL - not read"}' );      
    }
  	if ( $print ) {
	  	echo $this->to_json( $model );
	  } else {
		  return $model;
	  }
  }

  protected function _update( $fields, $id, $sid='id', $print=TRUE ) {
  // requires: $id IS set ($sid is name key column in real SQL table)
  // requires: $model['id'] IS set (by REST API from Backbone.js) and $model['id'] === $id
  // effects: to update SQL table and to print JSON object
    $values = json_decode( rawurldecode( $id ) );
    if ( ! is_array( $values ) )
      $values = array( $id );
    $where = array_combine( static::$KEY, $values );
    if ( isset(static::$UPDATABLE) && count(static::$UPDATABLE) > 0 ) {
		  $model = $this->from_json( $this->contents, static::$UPDATABLE );
	  } else {
		   $model = $this->from_json( $this->contents, $fields );
	  }
    $query = $this->db->get_where($this->get_table_name( ), $where );
    if ( $query->num_rows() === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not selected"}' );
    } else if ( $query->num_rows() > 1 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - don\'t permit multiply update"}' );
    }
	  $this->db->trans_start( );
    $this->_before_update( $model );
    $this->db->update( $this->get_table_name( ), $model, $where );
    if ( $this->db->affected_rows( ) === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not updated"}' );
    } else if( $this->db->affected_rows( ) === 1 ) {
     	$this->db->trans_complete();
    } else {
      $this->error_model_header( );
      die( '{"error":"SQL - not updated multiply"}' );
    }
	  $model = $this->from_json( $this->contents, $fields );
    $id = $this->key_json( $model );
    $model = $this->read( $id, false);
    if ( $sid === '_sur' )
      $model['_sur'] = $this->key_json( $model );
  	if ( $print ) {
	  	echo $this->to_json( $model );
	  } else {
		  return $model;
	  }  
	}

  protected function _delete( $fields, $id, $sid='id', $print=true ) {
  // requires: $id IS set ($sid is name key column in real SQL table)
  // effects: delete record $$sid === $id and output @todo
    $values = json_decode( rawurldecode( $id ) );
    if ( ! is_array( $values ) )
      $values = array( $id );
    $where = array_combine( static::$KEY, $values );
    $model = $this->read( $id, false);
    $query = $this->db->get_where($this->get_table_name( ), $where );
	//die($where);
    if ( $query->num_rows() === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not deleted"}' );
    } else if ( $query->num_rows() > 1 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - don\'t permit multiply delete"}' );
    }
	  $this->db->trans_start( );
    $this->db->delete( $this->get_table_name( ), $where );
    if ( $this->db->affected_rows( ) === 0 ) {
      $this->error_model_header( );
      die( '{"error":"SQL - not deleted"}' );
    } else if( $this->db->affected_rows( ) === 1 ) {
     	$this->db->trans_complete();
    } else {
      $this->error_model_header( );
      die( '{"error":"SQL - not deleted multiply"}' );
    }
  	if ( $print ) {
	  	echo $this->to_json( $model );
	  } else {
		  return $model;
	  }  
  }

  protected function _read_collection( $fields, 
                        $print=true, 
                        $order=false, 
                        $where=false,
                        $limit=false, 
                        $offset=false,
                        $undefined=false, 
                        $merge = array( ) ) {
                        
    $query = $this->db->select( $fields, false );
	  if ( $order !== false ) {
		  $query = $query->order_by( $order );
	  }
	  if ( $where !== false ) {
		  $query = $query->where( $where, NULL, FALSE );
	  }	
	  if ( $limit !== false ) {
		  if ( $offset !== false) {
			  $query = $query->limit( $limit, $offset );
		  } else {
			  $query = $query->limit( $limit );
	  	}
	  }
	  $query = $query->get( $this->get_view_name( ) );
    $model = array( );
    for ( $i = 0; $i < $query->num_rows( ); $i++ ) {
      $row = $query->row_array( $i );
      $_sur = $this->key_json( $row );
      $model[] = array_merge( $row,  array( '_read_collection:item' => $i ), $merge, array('_sur' => $this->key_json( $row ) ) );
    }
    if ( $undefined !== false ) for ( $i; $i < $limit; $i++ ) {
      $model[] = array_merge( array_fill_keys( $fields, $undefined ),
                                array( '_read_collection:item' => $i ), $merge );
    }
  	if ( $print === true ) {
	  	echo $this->to_json( $model );
	  } else {
		  return $model;
	  }
  }

  protected function key_json( $model ) {
    $json = '[';
    foreach ( static::$KEY as $key ) {
      if ( $json !== '[' )
        $json .= ',';
      $key = str_replace( '`', '', str_replace( '"', '',  $key) );
      $value = str_replace( '"', '\\"', $model[$key] );
      $json .= "\"$value\"";
    }
    $json .= ']';
    return $json;
  }
  
  protected function no_cache( ) {
    header("Cache-Control: no-store, no-cache,  must-revalidate");
    header("Expires: " .  date( "r" ));
  }

  protected function error_model_header( ) {
    header("HTTP/1.0 409 Conflict");
  }
  
  private function get_action( ) {
    switch ( $_SERVER['REQUEST_METHOD'] ) {
      case 'POST';
        return 'create';
        break;
      case 'GET';
        return 'read';
        break;
      case 'PUT';
        return 'update';
        break;
      case 'DELETE';
        return 'delete';
        break;
      case 'PATCH';
        return 'patch';
        break;
      default:
        return 'undefined';
    }
  }

  protected function get_contents( ) {
    return file_get_contents( 'php://input' );
  }

  protected function assoc_fields( $assoc, $filter ) {
    $result = array( );
    foreach ( $assoc as $key => $value ) {
      if ( in_array( $key, $filter ) 
            || in_array( "\"$key\"", $filter ) 
            || in_array( str_replace( '`', '', str_replace( '"', '', $key ) ), $filter )  ) {
        $result[$key] = $value;
      }
    }
    return $result;
  }

  protected function values_fields( $assoc, $filter ) {
    $result = array( );
    foreach ( $filter as $values ) {
        $result[] = $assoc[str_replace( '`', '', str_replace( '"', '', $values ) )];
    }
    return $result;
  }

  protected function from_json( $json, $filter=FALSE ) {
    $assoc = json_decode( $json, TRUE );
    if ( $filter !== FALSE ) {
      return $this->assoc_fields( $assoc, $filter );
    } else {
      return $assoc;
    }
  }

  protected function to_json( $assoc, $filter=FALSE ) {
    if ( $filter !== FALSE ) {
      $result = $this->assoc_fields( $assoc, $filter );
      return json_encode( $result );
    } else {
      return json_encode( $assoc );
    }
  }

  protected function get_table_name( ) {
    return static::TABLE;
  }

  protected function get_view_name( ) {
    if ( static::VIEW === '' )
      return static::TABLE;
    else
      return static::VIEW;
  }


}

class BBCombobx_Controller extends REST_Controller {
  
  const ID = NULL,
    NAME = NULL,
    DISPLAY_LIST = NULL,
    STRICT = 'STRICT'; // MEDIUM or LESS or STRICT or FULL
   
  public static $SEARCH = array( );

  public function index( ) {
    if ( isset( $_GET['id'] ) ) {
      $this->read( );
    } else {
      $this->read_collection( );
    }   
  }
  
  //protected function _read( $fields, $id, $sid='id', $print=true ) {
    //requires: $id IS set ($sid is name key column in real SQL table)
    //output: $model['id'] IS set AND $model[$sid] IS set AND ===  
  private function read( ) {
    $id = $_GET['id'];
    parent::_read( array( static::ID, static::DISPLAY_VALUE, static::DISPLAY_LIST ) , $id, static::ID );
  }

  //protected function _read_collection( $fields, $print=true, $order=false, $where=false, $limit=false, $offset=false ) {  
  private function read_collection( ) {
  
    if ( static::STRICT === 'MEDIUM' )
      $like = mb_substr( implode( '%', preg_split( '//u', $_GET['searchValue'] ) ), 1 );
    else if ( static::STRICT === 'LESS' or count( static::$SEARCH ) > 1 )
      $like = implode( '%', preg_split( '//u', $_GET['searchValue'] ) );
    else if ( static::STRICT === 'STRICT' )
      $like = $_GET['searchValue'] . '%';
    else if ( static::STRICT === 'FULL' )
      $like = $_GET['searchValue'];
    else
      $like = '%';
      
    $where =  static::$SEARCH[0] . $this->like . "'$like'";
    for ( $i = 1; $i < count( static::$SEARCH ); $i++ )
      $where .= " or " . static::$SEARCH[$i] . $this->like . "'$like'";
  
    if ( isset( $_GET['filter'] ) ) {
        $where = "($where)";
        foreach ( $_GET['filter'] as $key => $value) {
            $where .= " and \"$key\"='" . escape_string($value) . "'";
        }
    }
      
    parent::_read_collection( 
                  array( static::ID, static::DISPLAY_LIST, static::DISPLAY_VALUE),
                  true,
                  implode(',', static::$SEARCH),
                  $where,
                  $_GET['limit'],
                  ( $_GET['limit'] - 1) * $_GET['page'],
                  'backbone:combobox:item:undefined'
    );
  }
}



class Table_controller extends REST_Controller {

  const PAGE_LENGTH = 17;

  function __construct( ) {
    parent::__construct( );
    if ( isset( static::$PARENT ) && count( static::$PARENT ) > 0 && isset( $_GET['uid'] ) ) {
   	  $uid = $_GET['uid'];
      $model = $this->session->userdata( 'table:parent' . $uid);
      if ( ! $model ) {
        $this->session->set_userdata( 'table:parent' . $uid, array( array( static::$PARENT_INITIAL, array ( ) ) ) );
      }
    }  
  }

 
 public function readpage( $offset) {
	 $uid = $_GET['uid'];
	 //$this->getselection();die();
	 //die($this->getwhere( $uid ));
	 if ($this->getwhere( $uid ) === false)
	   $count = $this->db->count_all( $this->get_view_name( ) );
	 else
 	   $count = $this->db->from( $this->get_view_name( ) )->where( $this->getwhere( $uid ), NULL, FALSE  )->count_all_results( );
	 if ( $count < static::PAGE_LENGTH )
     $page_length = $count;
	 else
	   $page_length = static::PAGE_LENGTH;
	 if ( $offset == 'last' || ($offset > $count - $page_length) )
	   $offset = $count - $page_length;
	 if ( $offset < 0 )
	   $offset = 0;
 	 if ( $page_length > 0 )
  	   $page = floor( $count / $page_length ); 
     else
       $page = 0;
     $this->_read_collection( static::$FIELDS ,
	   true, implode(',' ,static::$ORDER), $this->getwhere( $uid ), $page_length, $offset, 'table:undefined', 
	   array( '_count' => $count, '_offset' => $offset, '_length' => $page_length )
	 );
 }

 public function findpage( $id ) {
	 $uid = $_GET['uid'];
   $this->session->set_userdata( 'table:filter' . $uid, array( ) );
 	 if ($this->getwhere( $uid ) === false)
	   $count = $this->db->count_all($this->get_view_name( ));
	 else
  	 $count = $this->db->from( $this->get_view_name( ) )->where( $this->getwhere( $uid ), NULL, FALSE )->count_all_results( );
   $model = $this->read( $id , false);
   $where = '';
   $and = '';
   $i=0;
   foreach ( static::$ORDER as $key ) {
     $key = str_replace( '`', '', str_replace( '"', '', $key ) );
     $value = escape_string( trim( $model[$key] ) );
     if ( $where !== '' ) {
       $where .= ' or ';
     }
     if (! isset(static::$ORDERS) || count(static::$ORDERS) === 0 )
       $where .=  $and . $this->qb .  $key . $this->qe . "<'$value' ";
     else
       $where .=  $and . static::$ORDERS[$i] . " < '$value' ";
     if ( ! isset(static::$ORDERS) || count(static::$ORDERS) === 0 )
       $and .= $this->qb . $key . $this->qv . "< '$value" . chr(33) . "' and ";
     else
       $and .=  static::$ORDERS[$i++] . "< '$value" . chr(33) . "' and ";
   }
   if ( $this->getwhere( $uid ) )
     $where = "($where) and " . $this->getwhere( $uid );
 	 $offset = $this->db->from( $this->get_view_name( ) )->where( $where, NULL, FALSE )->count_all_results( );
 	 $offset = $offset - (static::PAGE_LENGTH - static::PAGE_LENGTH % 2) / 2;
	 if ($count < static::PAGE_LENGTH)
	   $page_length = $count;
	 else
	   $page_length = static::PAGE_LENGTH;
	 if ( $offset > $count - $page_length )
	   $offset = $count - $page_length;
	 if ( $offset < 0 )
	   $offset = 0;

   if ( $page_length > 0 )
  	 $page = floor( $count / $page_length ); 
   else
     $page = 0;
   $this->_read_collection( static::$FIELDS ,
     	true, implode(',' ,static::$ORDER), $this->getwhere( $uid ), $page_length, $offset, 'table:undefined', 
     	array( '_count' => $count, '_offset' => $offset, '_length' => $page_length )
	 );
 }

 public function setfilter( ) {
   $uid = $_GET['uid'];
   $model = $this->from_json( $this->contents, static::$FIELDS );
   $this->session->set_userdata( 'table:filter' . $uid, $model);
 }
 
  public function clearfilter( ) {
    $uid = $_GET['uid'];
    $this->session->set_userdata( 'table:filter' . $uid, array( ) );
  }

 public function setselection( ) {
   $uid = $_GET['uid'];
   $model = $this->from_json( $this->contents, static::$FIELDS );
   $this->session->set_userdata( 'table:selection' . $uid, $model);
   $this->getselection( );
 }

 public function getselection( ) {
 	 $uid = $_GET['uid'];
   $model = $this->session->userdata( 'table:selection' . $uid);
   echo $this->to_json( $model );
 }

 public function getparent( ) {
 	 $uid = $_GET['uid'];
   $model = $this->session->userdata( 'table:parent' . $uid);
   //print_r($model);die();
   if ( ! $model or count( $model ) === 0 )
     return false;
   $model = array_combine( static::$PARENT, $model[0][0] );
  return $model;
 }

 public function printparent( ) {
 	 $uid = $_GET['uid'];
   $model = $this->session->userdata( 'table:parent' . $uid);
   echo $this->to_json( $model[0][1] );
 }


 public function echoparent( ) {
   echo $this->to_json( $this->getparent( ) );
 }


 public function setparent( ) {
   $uid = $_GET['uid'];
   $model = $this->from_json( $this->contents, static::$FIELDS );
   $model['_sur'] = $this->key_json( $model );
   foreach( static::$CHILD as $key )
     $parent[] = $model[$key];
   $saved_model = $this->getparent( );
   if ( $saved_model === false || $parent == $saved_model ) {
      $this->error_model_header( );
      die( '{error: "same parent"}' );
   }
   $saved_model = $this->session->userdata( 'table:parent' . $uid);
   array_unshift( $saved_model, array( $parent, $model ) );
   //print_r($saved_model);die();
   $this->session->set_userdata( 'table:parent' . $uid, $saved_model);
   //print_r($saved_model);die();
   $this->printparent( );
 }

 public function previousparent( ) {
   $uid = $_GET['uid'];
   $model = $this->session->userdata( 'table:parent' . $uid);
   if ( count( $model ) >1 )
     $saved_model = array_shift( $model );
   else
     $saved_model = $model[0];
   $this->session->set_userdata( 'table:parent' . $uid, $model);
   echo $this->to_json( $model[0][1] );
 }


 public function getwhere( $uid ) {
   $model_filter = $this->session->userdata( 'table:filter' . $uid );
   $model_selection = $this->session->userdata( 'table:selection' . $uid );
   $model_parent = $this->getparent( );
   $where = '';
   if ( $model_filter && count( $model_filter ) > 0 )    
     foreach ( $model_filter as $key => $value ) {
	   $key = str_replace( '`', '', str_replace( '"', '', $key) );
       if ( $where !== '' )
         $where .= ' or ';
       $like = implode( '%', preg_split( '//u', $value ) );
       $like = escape_string( $like );
       $where .=  $this->qb . $key . $this->qe . $this->like . "'$like'";
     }
   $i = 0;  
   if ( $model_selection && count( $model_selection ) > 0 ) {   
     foreach ( $model_selection as $key => $value ) {
	   $key = str_replace( '`', '', str_replace( '"', '', $key) );
       $pvalue = escape_string( $value );
       if ( $i++ === 0) {
         if ( $where === '' )
           $where =  $this->qb . $key . $this->qe . "= '$pvalue'";
         else
           $where = "($where) and" . $this->qb . $key . $this->qe . "= '$pvalue'";
       } else {
         $where .=  ' and' . $this->qb . $key . $this->qe . "= '$pvalue'";
       }
     }
   }
   if ( $model_parent ) {
     foreach ( $model_parent as $key => $value ) {
	     $key = str_replace( '`', '', str_replace( '"', '', $key) );
       $pvalue = escape_string( $value );
       if ( $i++ === 0) {
         if ( $where === '' )
           $where =  $this->qb . $key . $this->qe . "= '$pvalue'";
         else
           $where = "($where) and" . $this->qb . $key . $this->qe . "= '$pvalue'";
       } else {
         $where .=  ' and' . $this->qb . $key . $this->qe . "= '$pvalue'";
       }
     }
   }
   if ( $where === '' )
     $where = false;
     //die($where);
   return $where;      
 }
 
 
}

class SimpleTable_Controller extends Table_Controller {

  const NEXT_ID = '';

  public function create( $print = true ) {
    if ( static::NEXT_ID === 'NEXT' )
      return parent::_create_with_next_id(static::$FIELDS, '_sur', $print );
    else if ( static::NEXT_ID === 'USER' )
      return parent::_create_with_id(static::$FIELDS, '_sur', $print );
    else
      return parent::_create(static::$FIELDS, '_sur', $print );
  }

  public function read( $id, $print = true ) {
    return parent::_read(static::$FIELDS, $id, '_sur', $print );
  }

  public function update( $id, $print = true ) {
  	parent::_update( static::$FIELDS, $id, '_sur' , $print );
  }

  public function delete( $id, $print = true ) {
  	parent::_delete( static::$FIELDS, $id, '_sur' , $print );
  }




}
