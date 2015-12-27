<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Izdel extends SimpleTable_Controller {

 const TABLE = 'izdel',
 PAGE_LENGTH = 23,
 NEXT_ID = 'NEXT';
 
 public static $FIELDS =  array( '"kod"',  'parent'
    , '(select name from izdel i where i.kod=izdel.parent) as parent_name', 'name','koddet', 'initog'
    );
 public static $ORDER =  array( 'parent_name', 'name' );
 public static $ORDERS =  array( '(select name from izdel i where i.kod=izdel.parent)', 'name' );
 public static $KEY =  array( '"kod"' );

/* 
  kod numeric(10,0) NOT NULL,
  parent numeric(10,0) NOT NULL,
  name character varying(50) NOT NULL,
  koddet numeric(10,0) NOT NULL,
  display numeric(1,0) NOT NULL,
  initog numeric(1,0) NOT NULL,
  knzp numeric(10,5) NOT NULL,        
*/

  //public function create( $print = true  ) {
  //   return parent::_create_with_next_id(static::$FIELDS, 'kod', $print);
 // }



}
  
