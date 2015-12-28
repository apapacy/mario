<?php

class Regions extends MY_SimpleREST_Controller {

 const TABLE = 'regions',
 PAGE_LENGTH = 10;

 public static $FIELDS =  array( 'id', 'name');
 public static $ORDER =  array( 'name' );
 public static $KEY =  array( 'id' );

 function __construct( ) {
     parent::__construct();
 }

}
