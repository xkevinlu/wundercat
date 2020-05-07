var rangeSlider = document.getElementById('slider-range');

noUiSlider.create(rangeSlider, {
    start: [4000],
    range: {
        'min': [1],
        'max': [10000]
    }
});
var rangeSliderValueElement = document.getElementById('slider-range-value');
rangeSlider.noUiSlider.on('update', function (values, handle) {
    rangeSliderValueElement.innerHTML = values[handle];
});