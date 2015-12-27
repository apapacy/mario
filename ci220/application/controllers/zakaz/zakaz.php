<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Zakaz extends Table_Controller {

 const TABLE = 'zakaz',
 PAGE_LENGTH = 17,
 ORDER = '"ID"';
 
 public static $FIELDS =  array( '"ID"', 'dater','ni', 'datei', 'fioi', 'teli', 'dep0', 'dep1', 'body', 'reldoc', 'dateend', 'fion', 'depout', 'dateout', 'memo', 'n', 'date' );
 public static $ORDER =  array( '"ID"' );
 function __construct( ) {
    parent::__construct();
 }

/* 
                        
CREATE TABLE zakaz
(
  id bigint NOT NULL DEFAULT nextval('"zakaz_ID_seq"'::regclass),
  dater date DEFAULT now(),
  datei date,
  ni character varying(50),
  dep0 character varying(50),
  dep1 character varying(50),
  n character varying(50),
  body text,
  fioi character varying(50),
  teli character varying(50),
  fion character varying(50),
  dateout date,
  depout character varying(50),
  memo text,
  date character varying(10),
  dateend character varying(10),
  reldoc text,
  CONSTRAINT zakaz_pkey PRIMARY KEY                        

 protected function _read_collection( $fields, $print=true, 
                        $order=false, $where=false, $limit=false, $offset=false, $undefined=false )
*/

  public function create( ) {
    parent::_create(static::$FIELDS, 'ID');
  }


  public function read( $id ) {
    parent::_read(static::$FIELDS, $id, 'ID');
  }

  public function update( $id ) {
    parent::_update(static::$FIELDS, $id, 'ID');
  }

}
  
