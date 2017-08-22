<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Agenda extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//$this->load->helper(array('security','imagen_helper','otros_helper','fechas_helper'));
		//$this->load->model(array('model_cliente','model_ubigeo','model_zona','model_tipo_via'));
		//cache
		$this->output->set_header("Cache-Control: no-store, no-cache, must-revalidate, no-transform, max-age=0, post-check=0, pre-check=0");
		$this->output->set_header("Pragma: no-cache");
		//$this->sessionHospital = @$this->session->userdata('sess_vs_'.substr(base_url(),-8,7));
		date_default_timezone_set("America/Lima");
		//if(!@$this->user) redirect ('inicio/login');
		//$permisos = cargar_permisos_del_usuario($this->user->idusuario);
	}
	public function ver_agenda()
	{
		$this->load->view('agenda');
	}

	public function ver_formulario_agenda()
	{
		$this->load->view('agenda/formView_Agenda');
	}
}