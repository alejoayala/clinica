<!-- Start table in modal element -->
<div class="modal-content">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <div class="pull-left">
                <h3 class="panel-title">CLINICA MEDICA</h3>
            </div>
            <div class="pull-right">
                <button type="button" class="close" ng-click="cancel()" aria-hidden="true">&times;</button>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="panel-body no-padding">
            <div class="panel-heading">
                <div class="pull-left col-md-12">
                    <h3 class="panel-title col-md-6">Registrar Cita</h3>
                    <em class="mt-10 pull-right"><strong>{{dt | date:'fullDate' }}</strong></em>

                </div><!-- /.pull-left -->
                <div class="clearfix"></div>
            </div><!-- /.panel-heading -->
            <!-- Formulario de la Cita-->
            <div class="row">
                <div class="col-md-6">
                    <div style="display:inline-block; min-height:290px;" class="col-md-12">

                        <div class="well well-small pull-left" ng-model="dt">
                            <datepicker min="minDate" show-weeks="showWeeks"></datepicker>
                        </div>

                    </div>
                </div>
                <div class="col-md-6">

                    <!-- Start basic validation -->
                    <div class="panel rounded shadow">

                        <div class="panel-body no-padding">

                            <!--<form data-basic-validate class="form-horizontal form-bordered" role="form" action="#">-->
                            <form action="#">
                                <div class="form-body">
                                    <div class="form-group mb-0">
                                        <label class="control-label">Paciente : <span class="asterisk">*</span></label>
                                        <input type="text" ng-model="fData.paciente" class="form-control input-sm" name="bv_required" placeholder="Datos del Paciente">
                                    </div><!-- /.form-group -->
                                    <div class="form-group mb-0">
                                        <label class="control-label">Odontólogo :</label>
                                        <input type="text" ng-model="fData.odontologo" class="form-control input-sm" name="bv_required" placeholder="Datos del especialista">
                                    </div><!-- /.form-group -->
                                    <div class="form-group mt-10">
                                        <label class="control-label mr-20">Hora  :</label>
                                        <select chosen options="turnos" ng-model="fData.hora" ng-options="turn.valor as turn.valor
                                              for turn in turnodoc">
                                        </select>
                                    </div><!-- /.form-group -->
                                    <div class="form-group mt-10">
                                        <label class="control-label">Duracion :</label>
                                        <select chosen options="duracion" ng-model="fData.duracion" ng-options="duri.valor as duri.name
                                              for duri in durac">
                                        </select>
                                    </div><!-- /.form-group -->

                                    <div class="form-group mb-0">
                                        <label class="control-label">Tratamiento :</label>
                                        <input type="text" ng-model="fData.tratamiento" class="form-control input-sm" name="bv_required" placeholder="ingrese el tratamiento">
                                    </div><!-- /.form-group -->
                                </div><!-- /.form-body -->
                            </form>

                        </div><!-- /.panel-body -->
                    </div><!-- /.panel -->
                    <!--/ End basic validation -->

                </div>
            </div><!-- /.row -->


        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-theme" ng-click="add()">Grabar Cita</button>
        <button type="button" class="btn btn-danger" ng-click="cancel()">Cancelar</button>
    </div>
</div><!-- /.modal-content -->


<!--/ End table in modal element -->
