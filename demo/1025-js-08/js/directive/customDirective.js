app.directive('dropLoad', function() {
    return {
        restrict: EA,
        link: function(scope, element, attrs, supermanCtrl) {
            $(document).on({
                dragleave: function(e) {
                    e.preventDefault();
                },
                drop: function(e) {
                    e.preventDefault();
                },
                dragenter: function(e) {
                    e.preventDefault();
                },
                dragover: function(e) {
                    e.preventDefault();
                }
            });
            element.on("drop", function(e) {
                e.preventDefault();
                attrs.dropFile = e.dataTransfer.files[0];
            }, false);
        }
    };
});