<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Dogovor extends SimpleTable_Controller {

 const TABLE = 'dogovor',
   PAGE_LENGTH = 17, 
   NEXT_ID = 'NEXT';
 
/* CREATE TABLE dogovor(
  id bigint NOT NULL,
  dater date DEFAULT now(),
  nd character varying(256),
  misto character varying(256),
  memo text,
  contragent_id bigint,
  dogovor_id bigint,
  dep character varying(50),
  fio character varying(50),
  tel character varying(50),
  dateout date,
  accept integer NOT NULL DEFAULT 0,
  dated character varying(8),
  "type" integer NOT NULL DEFAULT 0,
  sum numeric(20,4),
  sumnds numeric(20,2),
  valute character varying(3),
  CONSTRAINT dogovor_pkey PRIMARY KEY (id))*/

 public static $FIELDS =  array( '"id"', 'dater','contragent', '(select c.name from contragent c where c.id=contragent) as contragent_name',
    '"type"', '(select t.name from dogovor_type t where t.id=type) as type_name' , 'nd', 'dated', 'dogovor_id', 'memo', 'sum', 'sumnds','valute',
    'dateout', 'accept', 'dep', 'fio','tel');
 public static $ORDER =  array( '"id"' );
 public static $KEY =  array( '"id"' );
 public static $UPDATABLE =  array( '"id"', 'nd', 'misto', 'memo', 'contragent', 'dogovor_id',
    'dep', 'fio', 'tel', 'dateout', 'accept', 'dated', '"type"', 'sum', 'sumnds', 'valute');
 
 function __construct( ) {
    parent::__construct();
 }
  protected function _before_insert( &$model, $id=NULL ) {
      if ( $model['dateout'] === '' )
          $model['dateout'] = Null;
  }

  protected function _before_update( &$model) {
      if ( $model['dateout'] === '' )
          $model['dateout'] = Null;
  }
  
}
  
