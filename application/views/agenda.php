<div id="main">
  <div id="container" >
    <div id="content">
      <div>

        <div ng-app="blankonApp.agenda" ng-controller="CalendarCtrl as ctrl" >
            <div class="row">
                <div class="col-md-12" >

                    <!-- Start select fields - basic form -->
                    <div class="panel rounded shadow no-overflow" style="margin-bottom: 10px !important;">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h3 class="panel-title">Sede : <span><strong>CENTRAL</strong></span></h3>
                            </div>
                            <div class="pull-right">
                                <button data-tooltip data-collapse-panel class="btn btn-sm" data-action="collapse" data-container="body" data-toggle="tooltip" data-placement="top" data-title="Collapse"><i class="fa fa-angle-up"></i></button>
                            </div>
                            <div class="clearfix"></div>
                        </div><!-- /.panel-heading -->
                        <div class="panel-body no-padding" >
                            <form action="#" class="col-md-6">
                                <div class="form-body" style="padding-bottom: 0px !important;">
                                    <div class="form-group mb-0">
                                        <label class="control-label col-md-3"><strong>Especialista : </strong></label>
                                        <div class="col-md-9">
                                            <select data-chosen-select data-placeholder="Seleccione el Odontologo" class="chosen-select mb-15" tabindex="2">
                                                <option value="">Todos</option>
                                                <option value="United States">Dr. Marcos Miguel Castro Albinagorta</option>
                                                <option value="United Kingdom">Dra. Juana Martinez</option>
                                                <option value="Afghanistan">Dr. Augusto Caceres</option>
                                                <option value="Albania">Dra. Julia Reategui</option>
                                                <option value="Algeria">Dr. Raul Fuentes</option>
                                                <option value="American Samoa">Dra. Mirella Torres</option>
                                                <option value="Andorra">Dr. Juan Carlos Cabrera</option>
                                                <option value="Angola">Dra. Antonella Ruiz</option>
                                                <option value="Anguilla">Dr. Alberto Berrios</option>
                                                <option value="Antarctica">Dra. Amalia Vega</option>
                                                <option value="Antigua and Barbuda">Dr. Julio Vernis</option>
                                            </select>

                                        </div>

                                    </div><!-- /.form-group -->


                                </div><!-- /.form-body -->

                            </form>
                            <div class="row col-md-6">
                                <div class="pull-right" style="margin-top: 10px !important;">
                                    Vista :
                                    <button class="btn btn-primary btn-sm" ng-click="ctrl.day()">Diaria</button>
                                    <button class="btn btn-primary btn-sm" ng-click="ctrl.week()">Semanal</button>
                                </div>
                                <div class="pull-right" style="margin: 10px 35px 10px 10px !important;">
                                    Nueva Cita :
                                    <button class="btn btn-success btn-sm" ng-click="ctrl.openModal('new')">Asignar Cita</button>
                                    <!--<button class="btn btn-theme" data-toggle="modal" data-target=".bs-example-modal-table">Asignar Cita</button>-->
                                </div>
                            </div>
                        </div><!-- /.panel-body -->
                    </div><!-- /.panel -->
                    <!--/ End select fields - basic form -->

                </div>

            </div><!-- /.row -->


            <div style="float:left; width: 150px;">
                <daypilot-navigator id="nav" config="ctrl.config2" events="ctrl.events" publish-as="ctrl.navigator"></daypilot-navigator>
            </div>
            <div style="margin-left: 150px;">
                <daypilot-calendar id="dp" config="ctrl.config" events="ctrl.events" publish-as="ctrl.calendar"></daypilot-calendar>

            </div>

            <div id="print"></div>



       </div>
      </div>
    </div>
  </div>
</div>

  <!-- /bottom -->
