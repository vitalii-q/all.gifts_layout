function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
            document.getElementById('information__form-file-p').classList.add('display-none');
            document.getElementById('information__form-clippaper').classList.add('display-none');

            document.getElementById('blah').classList.add('display-block');
            document.getElementById('information__form-remove').classList.add('display-block');
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#file-input").change(function(){
    readURL(this);
});

document.getElementById('information__form-remove').onclick = function() {
    document.getElementById('information__form-file-p').classList.remove('display-none');
    document.getElementById('information__form-clippaper').classList.remove('display-none');
    document.getElementById('information__form-remove').classList.remove('display-block');
    document.getElementById('blah').classList.remove('display-block');

    $('#blah').attr('src', '#');
}