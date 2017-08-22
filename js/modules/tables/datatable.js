"use strict";
(function(){
    angular.module('blankonApp.tables.datatable', [])

        // =========================================================================
        // USING AJAX
        // =========================================================================
        .directive('datatableAjax', function () {
            return {
                restrict: 'A',
                link: function (scope, element, settings) {
                    var responsiveHelperAjax = undefined,
                        breakpointDefinition = {
                            tablet: 1024,
                            phone : 480
                        },
                        tableAjax = element;

                    tableAjax.dataTable({
                        autoWidth      : false,
                        ajax           : 'assets/global/plugins/bower_components/datatables/datatable-sample.json',
                        preDrawCallback: function () {
                            // Initialize the responsive datatables helper once.
                            if (!responsiveHelperAjax) {
                                responsiveHelperAjax = new ResponsiveDatatablesHelper(tableAjax, breakpointDefinition);
                            }
                        },
                        rowCallback    : function (nRow) {
                            responsiveHelperAjax.createExpandIcon(nRow);
                        },
                        drawCallback   : function (oSettings) {
                            responsiveHelperAjax.respond();
                        }
                    });
                }
            }
        })

        // =========================================================================
        // USING DOM
        // =========================================================================
        .directive('datatableDom', function () {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    var responsiveHelperDom = undefined,
                        breakpointDefinition = {
                            tablet: 1024,
                            phone : 480
                        },
                        tableDom = element;

                    // Remove arrow datatable
                    $.extend( true, $.fn.dataTable.defaults, {
                        "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 0, 1, 2, 5 ] } ]
                    } );
                    tableDom.dataTable({
                        autoWidth        : false,
                        preDrawCallback: function () {
                            // Initialize the responsive datatables helper once.
                            if (!responsiveHelperDom) {
                                responsiveHelperDom = new ResponsiveDatatablesHelper(tableDom, breakpointDefinition);
                            }
                        },
                        rowCallback    : function (nRow) {
                            responsiveHelperDom.createExpandIcon(nRow);
                        },
                        drawCallback   : function (oSettings) {
                            responsiveHelperDom.respond();
                        }
                    });
                }
            }
        })

        // =========================================================================
        // REPEATER
        // =========================================================================
        .directive('repeaterTable', function () {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    var columns = [
                        {
                            label: 'Codigo',
                            property: 'codeProduct',
                            sortable: true
                        },
                        {
                            label: 'Sede',
                            property: 'name',
                            sortable: true
                        },
                        {
                            label: 'Pto. Venta',
                            property: 'available',
                            sortable: true
                        },
                        {
                            label: 'Monto',
                            property: 'price',
                            sortable: true
                        },
                        {
                            label: 'Pago Tarj.',
                            property: 'itemCondition',
                            sortable: true
                        },
                        {
                            label: 'Pago Efect.',
                            property: 'sold',
                            sortable: true
                        },
                        {
                            label: 'Total',
                            property: 'review',
                            sortable: true
                        }
                    ];
                    var delays = ['300', '600', '900', '1200'];
                    var products = [
                        {
                            "codeProduct": "#101",
                            "name": "La Merced",
                            "available": "1",
                            "price": "US $349.95",
                            "itemCondition": "150",
                            "sold": "5",
                            "review": "253 documentos",
                            "ThumbnailAltText": "Canon EOS Rebel",
                            "ThumbnailImage": "../../../img/media/shop/1.jpg",
                            "type": "electronics, camera"
                        },
                        {
                            "codeProduct": "#102",
                            "name": "La Merced",
                            "available": "2",
                            "price": "US $197.42",
                            "itemCondition": "115",
                            "sold": "23",
                            "review": "563 documentos",
                            "ThumbnailAltText": "Samsung Galaxy S III",
                            "ThumbnailImage": "../../../img/media/shop/2.jpg",
                            "type": "electronics, mobile, gadget"
                        },
                        {
                            "codeProduct": "#103",
                            "name": "La Molina",
                            "available": "1",
                            "price": "US $199.99",
                            "itemCondition": "250",
                            "sold": "67",
                            "review": "342 documentos",
                            "ThumbnailAltText": "Samsung 32' LED",
                            "ThumbnailImage": "../../../img/media/shop/3.jpg",
                            "type": "electronics, tv"
                        },
                        {
                            "codeProduct": "#104",
                            "name": "La Molina",
                            "available": "2",
                            "price": "US $19.99",
                            "itemCondition": "290",
                            "sold": "45",
                            "review": "333 documentos",
                            "ThumbnailAltText": "IOTA - Love Come Wicked",
                            "ThumbnailImage": "../../../img/media/shop/4.jpg",
                            "type": "music"
                        },
                        {
                            "codeProduct": "#105",
                            "name": "San Borja",
                            "available": "1",
                            "price": "US $11.50",
                            "itemCondition": "57",
                            "sold": "67",
                            "review": "102 documentos",
                            "ThumbnailAltText": "Jimmy Van Eaton",
                            "ThumbnailImage": "../../../img/media/shop/5.jpg",
                            "type": "music"
                        },
                        {
                            "codeProduct": "#106",
                            "name": "San Borja",
                            "available": "2",
                            "price": "US $6.39",
                            "itemCondition": "320",
                            "sold": "234",
                            "review": "642 documentos",
                            "ThumbnailAltText": "Sexy Fashion Women's",
                            "ThumbnailImage": "../../../img/media/shop/6.jpg",
                            "type": "fashion"
                        },
                        {
                            "codeProduct": "#107",
                            "name": "Chorrillos",
                            "available": "1",
                            "price": "US $7.99",
                            "itemCondition": "112",
                            "sold": "543",
                            "review": "643 documentos",
                            "ThumbnailAltText": "Korean Fashion Women's",
                            "ThumbnailImage": "../../../img/media/shop/7.jpg",
                            "type": "fashion, korean"
                        },
                        {
                            "codeProduct": "#108",
                            "name": "Chorrillos",
                            "available": "2",
                            "price": "US $7.58",
                            "itemCondition": "50",
                            "sold": "312",
                            "review": "365 documentos",
                            "ThumbnailAltText": "Fashion Women Loose",
                            "ThumbnailImage": "../../../img/media/shop/8.jpg",
                            "type": "fashion"
                        },
                        {
                            "codeProduct": "#109",
                            "name": "Miraflores",
                            "available": "1",
                            "price": "US $15.99",
                            "itemCondition": "20",
                            "sold": "90",
                            "review": "110 documentos",
                            "ThumbnailAltText": "10 Seeds Miracle Fruits",
                            "ThumbnailImage": "../../../img/media/shop/9.jpg",
                            "type": "home_garden"
                        },
                        {
                            "codeProduct": "#110",
                            "name": "Miraflores",
                            "available": "2",
                            "price": "US $9.99",
                            "itemCondition": "520",
                            "sold": "342",
                            "review": "876 documentos",
                            "ThumbnailAltText": "10 Seeds Triphasia",
                            "ThumbnailImage": "../../../img/media/shop/10.jpg",
                            "type": "home_garden"
                        },
                        {
                            "codeProduct": "#111",
                            "name": "Barranco",
                            "available": "1",
                            "price": "US $29.99",
                            "itemCondition": "100",
                            "sold": "553",
                            "review": "653 documentos",
                            "ThumbnailAltText": "Nike Men's Mercurial",
                            "ThumbnailImage": "../../../img/media/shop/11.jpg",
                            "type": "sport, all"
                        },
                        {
                            "codeProduct": "#112",
                            "name": "Barranco",
                            "available": "2",
                            "price": "US $24.99",
                            "itemCondition": "156",
                            "sold": "300",
                            "review": "456 documentos",
                            "ThumbnailAltText": "CR7 Jersey Real Madrid",
                            "ThumbnailImage": "../../../img/media/shop/12.jpg",
                            "type": "sport, jersey"
                        }
                    ];
                    var dataSource, filtering;

                    dataSource = function(options, callback){
                        var items = filtering(options);
                        var resp = {
                            count: items.length,
                            items: [],
                            page: options.pageIndex,
                            pages: Math.ceil(items.length/(options.pageSize || 50))
                        };
                        var i, items, l;

                        i = options.pageIndex * (options.pageSize || 50);
                        l = i + (options.pageSize || 50);
                        l = (l <= resp.count) ? l : resp.count;
                        resp.start = i + 1;
                        resp.end = l;

                        if(options.view==='list' || options.view==='thumbnail'){
                            if(options.view==='list'){
                                resp.columns = columns;
                                for(i; i<l; i++){
                                    resp.items.push(items[i]);
                                }
                            }else{
                                for(i; i<l; i++){
                                    resp.items.push({
                                        name: items[i].name,
                                        src: items[i].ThumbnailImage
                                    });
                                }
                            }

                            setTimeout(function(){
                                callback(resp);
                            }, delays[Math.floor(Math.random() * 4)]);
                        }


                    };

                    filtering = function(options){
                        var items = $.extend([], products);
                        var search;
                        if(options.filter.value!=='all'){
                            items = $.grep(items, function(item){
                                return (item.type.search(options.filter.value)>=0);
                            });
                        }
                        if(options.search){
                            search = options.search.toLowerCase();
                            items = $.grep(items, function(item){
                                return (
                                (item.codeProduct.toLowerCase().search(options.search)>=0) ||
                                (item.name.toLowerCase().search(options.search)>=0) ||
                                (item.available.toLowerCase().search(options.search)>=0) ||
                                (item.price.toLowerCase().search(options.search)>=0) ||
                                (item.itemCondition.toLowerCase().search(options.search)>=0) ||
                                (item.sold.toLowerCase().search(options.search)>=0) ||
                                (item.review.toLowerCase().search(options.search)>=0) ||
                                (item.type.toLowerCase().search(options.search)>=0)
                                );
                            });
                        }
                        if(options.sortProperty){
                            items = $.grep(items, function(item){
                                if(options.sortProperty==='id' || options.sortProperty==='height' || options.sortProperty==='weight'){
                                    return parseFloat(item[options.sortProperty]);
                                }else{
                                    return item[options.sortProperty];
                                }
                            });
                            if(options.sortDirection==='desc'){
                                items.reverse();
                            }
                        }

                        return items;
                    };

                    // REPEATER
                    $('#repeaterIllustration').repeater({
                        dataSource: dataSource
                    });

                    element.repeater({
                        dataSource: dataSource
                    });

                    $('#myRepeaterList').repeater({
                        dataSource: dataSource
                    });

                    $('#myRepeaterThumbnail').repeater({
                        dataSource: dataSource,
                        thumbnail_template: '<div class="thumbnail repeater-thumbnail" style="background: {{color}};"><img height="75" src="{{src}}" width="65"><span>{{name}}</span></div>'
                    });
                }
            }
        });

})();