<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Zadan extends SimpleTable_Controller {

 const TABLE = 'zadan',
 PAGE_LENGTH = 27,
 NEXT_ID = 'NEXT';
 
 public static $FIELDS =  array( 'parent', 'kod','cex', 'nop', 'tipop',
     '(select name from tipop where zadan.tipop=tipop.kod) as tipop_name', 'raz', 'zadan', 'platmin', 'platkop', 'nvr', 'zpl');
 public static $ORDER =  array( 'nop' );
 public static $KEY =  array( 'kod' );

}
  
/*
REATE TABLE zadan
(
  kod numeric(10,0) NOT NULL DEFAULT next_zadan(),
  parent numeric(10,0),
  cex character varying(7),
  nop numeric(6,1) DEFAULT 0,
  tipop numeric(5,0) DEFAULT 0,
  raz numeric(1,0) DEFAULT 0,
  zadan numeric(10,3) DEFAULT 0,
  stan numeric(5,0) DEFAULT 0,
  prim text,
  nvr numeric(10,3) DEFAULT 0,
  zpl numeric(10,3) DEFAULT 0,
  nzpcmin numeric(10,3) DEFAULT 0,
  nzpckop numeric(10,3) DEFAULT 0,
  nzpzmin numeric(10,3) DEFAULT 0,
  nzpzkop numeric(10,3) DEFAULT 0,
  otzmin numeric(10,3) DEFAULT 0,
  otzkop numeric(10,3) DEFAULT 0,
  ras numeric(10,3) DEFAULT 0,
  tab text,
  platmin numeric(10,3) DEFAULT 0,
  platkop numeric(10,3) DEFAULT 0,
  platmin090517 numeric(10,3) DEFAULT 0,
  platkop090517 numeric(10,3) DEFAULT 0,
  tab090517 character varying,
  CONSTRAINT "Zanat_PK_KOD" PRIMARY KEY (kod),
  CONSTRAINT zadan_cen FOREIGN KEY (parent)
      REFERENCES cennic (kod) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE RESTRICT
)
*/
