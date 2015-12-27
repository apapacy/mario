<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

class Doc_det_eco_cennic extends SimpleTable_Controller {


/*
-- View: doc_det_eco_cennic_view

-- DROP VIEW doc_det_eco_cennic_view;

CREATE OR REPLACE VIEW doc_det_eco_cennic_view AS 
 SELECT dd.kod,
    dd.npp,
    dd.kodiz,
    dd.koddet,
    dd.nop,
    dd.kol,
    h.prim,
    i.name AS kodiz_name,
    c.name AS koddet_name,
    ec.cen
   FROM doc_det dd
     LEFT JOIN izdel i ON i.kod = dd.kodiz
     LEFT JOIN cennic c ON c.kod = dd.koddet
     LEFT JOIN eco_cennic ec ON dd.koddet = ec.koddet AND ec.nop = 0::numeric
     LEFT JOIN doc_h h ON h.kod = dd.kod
  ORDER BY dd.kod, dd.npp;

ALTER TABLE doc_det_eco_cennic_view
  OWNER TO postgres;

*/
 const TABLE = 'doc_det', VIEW = 'doc_det_eco_error_view',
 PAGE_LENGTH = 17;
 
 public static $FIELDS =  array( 'kod','npp','kodiz','koddet','kodiz_name','oiz_name','koddet_name', 'pt_naimd','depstk','nop','kol','cen','ec_cen');
 public static $ORDER =  array( 'kod', 'npp' );
 public static $KEY =  array( 'kod', 'npp' );
 public static $UPDATABLE =  array( 'kodiz', 'koddet' );
 


}
  
