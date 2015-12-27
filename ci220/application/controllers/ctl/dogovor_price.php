<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Dogovor_price extends SimpleTable_Controller {

 const TABLE = 'dogovor_price',
   PAGE_LENGTH = 17, 
   NEXT_ID = 'USER';
 
/* CREATE TABLE dogovor_price(
  id integer NOT NULL,
  dogovor_id bigint NOT NULL,
  nomen character varying(256) NOT NULL,
  assort character varying(256) NOT NULL,
  vendor character varying(256) NOT NULL,
  ei character varying(256),
  kol double precision,
  price numeric(20,4),
  pricends numeric(20,2),
  profile character varying(256),
  size character varying(256),
  memo text,
  CONSTRAINT dogovor_price_pkey PRIMARY KEY (dogovor_id, id),
  CONSTRAINT dogovor_price_dogovor_id_fkey FOREIGN KEY (dogovor_id)
      REFERENCES dogovor (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION)*/

  public static $FIELDS =  array( 'dogovor_id', '"id"', 'nomen', 'assort', 'vendor', 'profile', 'size', 'ei', 'kol', 'price', 'pricends','memo',
  'kol * price as sum','kol * pricends as sumnds',
  '(select sum(kol * price) from dogovor_price d where d.dogovor_id=dogovor_price.dogovor_id) as itg',
  '(select sum(kol * pricends) from dogovor_price d where d.dogovor_id=dogovor_price.dogovor_id) as itgnds'
  );
  public static $ORDER =  array( '"id"' );
  public static $KEY =  array( 'dogovor_id', '"id"' );
  public static $UPDATABLE =  array( 'dogovor_id', '"id"', 'nomen', 'assort', 'vendor', 'profile', 'size', 'ei', 'kol', 'price', 'pricends','memo');
 
  function __construct( ) {
    parent::__construct();
  }
  protected function _before_insert( &$model, $id ) {
  }

  protected function _before_update( &$model) {
  }
  
}
  
