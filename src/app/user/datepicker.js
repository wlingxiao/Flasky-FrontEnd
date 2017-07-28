import $ from 'jquery'
import 'bootstrap-datepicker'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'


export const initDatePicker = function () {
    initDatePicker($('#last-login-time .input-daterange'));
    initDatePicker($('#sign-up-time .input-daterange'));

    function initDatePicker(jqeuryElement) {
        jqeuryElement.datepicker({
            format: 'yyyy-mm-dd',
            clearBtn: true,
            language: 'zh-CN',
            todayHighlight: true
        })
    }
};

export const clearDateRanger = function () {
    $('.input-daterange input').each(function () {
        $(this).datepicker('clearDates');
    });
};
