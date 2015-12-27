<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Data extends SimpleTable_Controller {

 const TABLE = 'sim_data',
   PAGE_LENGTH = 17, 
   NEXT_ID = 'USER';
 
 public static $FIELDS =  array( '"table"', '"key"','"order"', 'orders', 'next_id');
 public static $ORDER =  array( '"table"' );
 public static $KEY =  array( '"table"' );
 
 

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



}
  
