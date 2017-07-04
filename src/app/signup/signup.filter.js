export default function () {
    return function (input, hasSuccess, hasError) {
        return input ? hasSuccess : hasError;
    }
};