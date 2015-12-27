<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Cts extends SimpleTable_Controller {

 const TABLE = 'cts',
 PAGE_LENGTH = 23,
 ORDER = 'so';
 
 public static $FIELDS =  array(  "so ::varchar||'$$$'||s ::varchar||'$$$'||r ::varchar as _sur",  'so', 'r','s', 'cts');
 public static $ORDER =  array( 'so', 's', 'r' );
 public static $KEY =  array( 'so', 's', 'r' );


/* 
CREATE TABLE cts
(
  so numeric(1,0) NOT NULL,
  r numeric(1,0) NOT NULL,
  s numeric(1,0) NOT NULL,
  cts numeric(15,5) NOT NULL,
  CONSTRAINT cts_pkey PRIMARY KEY (so, s, r)
)                        
*/

  public function create( $print = true  ) {
    parent::_create_with_id(static::$FIELDS, '_sur', $print);
  }


}
  
