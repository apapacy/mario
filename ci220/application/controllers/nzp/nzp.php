<?php if ( ! defined( 'BASEPATH' ) ) exit( 'No direct script access allowed' );

require('DBF.class.php');

class Nzp extends CI_Controller {

  public function index( $kod  ) {
    $sql = "select i.name as izdel_name, c.naimd as detal_name, dd.nop, dd.kol, dd.nv, dd.rc/100 as rc"
	.", case when dd.cen>0 then dd.cen else e.cen end, dd.depstk from doc_det dd"
    . " left outer join oiz i on dd.kodiz=i.kod left outer join pt c on dd.koddet=c.kodd left outer join eco_cennic e on dd.koddet=e.koddet where dd.kod=$kod and dd.kol>0 order by dd.npp ";
    

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

    /*$this->db->query( "SET NAMES 'WIN1251'" );
	$result = $this->db->query( $sql );
    for ( $i = 0; $i < $result->num_rows( ); $i++ ) {
      $model[] = array_values( $result->row_array( $i ) );
	}
	DBF::write( 'nzp16cp1251.dbf', $structura, $model  );*/
	echo 123;
	
    $this->db->query( "SET NAMES 'WIN866'" );
	$result = $this->db->query( $sql );
    for ( $i = 0; $i < $result->num_rows( ); $i++ ) {
      $model866[] = array_values( $result->row_array( $i ) );
	}
	DBF::write( "../nzpi_{$kod}_cp866.dbf", $structura, $model866  );
	echo 456;
  //chmod('nzp16cp1251.dbf', 0777);
	
  //chmod("../nzpi160_{$kod}_cp866.dbf", 0777);

  $structura[] =   	array(
   		'name' => 'KODDET',
  		'type' => 'N',
   		'size' => 10,
   		'declength' => 0,
   		'NOCPTRANS' => true,
   	);
    $sql = "select i.name as izdel_name, c.naimd as detal_name, dd.nop, dd.kol, dd.nv, dd.rc/100 as rc, e.cen, dd.depstk, dd.koddet from doc_det dd"
    . " left outer join oiz i on dd.kodiz=i.kod left outer join pt c on dd.koddet=c.kodd left outer join eco_cennic e on dd.koddet=e.koddet where dd.kod=$kod and dd.kol>0 order by dd.npp ";

    $this->db->query( "SET NAMES 'WIN1251'" );
	$result = $this->db->query( $sql );
    for ( $i = 0; $i < $result->num_rows( ); $i++ ) {
      $model1251[] = array_values( $result->row_array( $i ) );
	}
	DBF::write( "test_{$kod}_cp1251.dbf", $structura, $model1251  );
	echo 478;

  }
	

}
