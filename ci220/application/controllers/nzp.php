<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

require('DBF.class.php');

class Nzp extends CI_Controller {

  public function index( $kod  ) {


  $sql = "select i.name as izdel_name, c.naimd as detal_name, dd.nop, dd.kol, dd.nv, dd.rc/100 as rc"
	. ", case when dd.cen>0 then dd.cen else e.cen end, dd.depstk " 
    . ",(select depstk from eco_cennic lec where dd.koddet=lec.koddet and dd.nop>=lec.nop order by lec.nop desc limit 1) as ec_depstk"
	. " from doc_det dd"
    . " left outer join oiz i on dd.kodiz=i.kod"
	. " left outer join pt c on dd.koddet=c.kodd"
	. " left outer join eco_cennic e on dd.koddet=e.koddet and e.nop=0"
	. " where dd.kod=$kod and dd.kol>0 order by dd.npp ";
    

	$structura = array(

	array(
   		'name' => 'IZD',
  		'type' => 'C',
   		'size' => 40,
   		'NOCPTRANS' => true,
   	),

	array(
   		'name' => 'DET',
  		'type' => 'C',
   		'size' => 60,
   		'NOCPTRANS' => true,
   	),
	
	array(
   		'name' => 'NOP',
  		'type' => 'N',
   		'size' => 10,
   		'declength' => 0,
   		'NOCPTRANS' => true,
   	),
	array(
   		'name' => 'KOL',
  		'type' => 'N',
   		'size' => 10,
   		'declength' => 0,
   		'NOCPTRANS' => true,
   	),
	array(
   		'name' => 'MIN',
  		'type' => 'N',
   		'size' => 15,
   		'declength' => 3,
   		'NOCPTRANS' => true,
   	),

	array(
   		'name' => 'ZP',
  		'type' => 'N',
   		'size' => 15,
   		'declength' => 5,
   		'NOCPTRANS' => true,
   	)
	,

	array(
   		'name' => 'MAT',
  		'type' => 'N',
   		'size' => 15,
   		'declength' => 5,
   		'NOCPTRANS' => true,
   	)
	,

	array(
   		'name' => 'DEPSTK',
  		'type' => 'N',
   		'size' => 3,
   		'declength' => 0,
   		'NOCPTRANS' => true,
   	)

);

	echo 123;
	
    $this->db->query( "SET NAMES 'WIN866'" );
	$result = $this->db->query( $sql );

    for ( $i = 0; $i < $result->num_rows( ); $i++ ) {
      $model866[$i] = array_values( $result->row_array( $i ) );
	  if ( $model866[$i][7] == 0  ) {
	    $model866[$i][7] = $model866[$i][8];
	  } else if ( $model866[$i][7] == 160  ) {
	    $model866[$i][7] = 0;
	  }
	}

	DBF::write( "../nzpi_{$kod}_cp866.dbf", $structura, $model866  );

	echo 456;


  }
	

}
