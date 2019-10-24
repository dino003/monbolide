<!DOCTYPE html>
    <html class="no-js" lang="zxx">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
         <!--=== Favicon ===-->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

            <title>Mon Bolide.com</title>

            <!--=== Bootstrap CSS ===-->
            <link href="{{asset ('assets/css/bootstrap.min.css') }}" rel="stylesheet">
            <!--=== Vegas Min CSS ===-->
             <link href="{{ asset('assets/css/plugins/vegas.min.css') }}" rel="stylesheet">
            <!--=== Slicknav CSS ===-->
            <link href="{{asset ('assets/css/plugins/slicknav.min.css') }}" rel="stylesheet">
            <!--=== Magnific Popup CSS ===-->
            <link href="{{asset ('assets/css/plugins/magnific-popup.css') }}" rel="stylesheet">
            <!--=== Owl Carousel CSS ===-->
            <link href="{{asset ('assets/css/plugins/owl.carousel.min.css') }}" rel="stylesheet">
            <!--=== Gijgo CSS ===-->
            <link href="{{asset ('assets/css/plugins/gijgo.css') }}" rel="stylesheet">
            <!--=== FontAwesome CSS ===-->
            <link href="{{asset ('assets/css/font-awesome.css') }}" rel="stylesheet">
            <!--=== Theme Reset CSS ===-->
            <link href="{{asset ('assets/css/reset.css') }}" rel="stylesheet">
            <!--=== Main Style CSS ===-->
            <link href="{{asset ('style.css') }}" rel="stylesheet">
            <!--=== Responsive CSS ===-->
            <link href="{{asset ('assets/css/responsive.css') }}" rel="stylesheet">



            <!--[if lt IE 9]>
                <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
    </head>
    <body class="loader-active">
    <div class="preloader">
        <div class="preloader-spinner">
            <div class="loader-content">
                <img src="{{asset('assets/img/preloader.gif')}}" alt="JSOFT" />
            </div>
        </div>
    </div>
        <div id="app"></div>

        <div class="scroll-top">
        <img src="{{ asset('assets/img/scroll-top.png ') }}" alt="JSOFT" /> 
    </div>
        <script src="{{ asset('js/app.js') }}"></script>

         <!--=======================Javascript============================-->
    <!--=== Jquery Min Js ===-->
    <script src="{{ asset('assets/js/jquery-3.2.1.min.js ') }}"></script>
    <!--=== Jquery Migrate Min Js ===-->
    <script src="{{ asset('assets/js/jquery-migrate.min.js ') }}"></script>
    <!--=== Popper Min Js ===-->
    <script src="{{ asset('assets/js/popper.min.js ') }}"></script>
    <!--=== Bootstrap Min Js ===-->
    <script src="{{ asset('assets/js/bootstrap.min.js ') }}"></script>
    <!--=== Gijgo Min Js ===-->
    <script src="{{ asset('assets/js/plugins/gijgo.js ') }}"></script>
    <!--=== Vegas Min Js ===-->
    <script src="{{ asset('assets/js/plugins/vegas.min.js ') }}"></script>
    <!--=== Isotope Min Js ===-->
    <script src="{{ asset('assets/js/plugins/isotope.min.js ') }}"></script>
    <!--=== Owl Caousel Min Js ===-->
    <script src="{{ asset('assets/js/plugins/owl.carousel.min.js ') }}"></script>
    <!--=== Waypoint Min Js ===-->
    <script src="{{ asset('assets/js/plugins/waypoints.min.js ') }}"></script>
    <!--=== CounTotop Min Js ===-->
    <script src="{{ asset('assets/js/plugins/counterup.min.js ') }}"></script>
    <!--=== YtPlayer Min Js ===-->
    <script src="{{ asset('assets/js/plugins/mb.YTPlayer.js ') }}"></script>
    <!--=== Magnific Popup Min Js ===-->
    <script src="{{ asset('assets/js/plugins/magnific-popup.min.js ') }}"></script>
    <!--=== Slicknav Min Js ===-->
    <script src="{{ asset('assets/js/plugins/slicknav.min.js ') }}"></script>

    <!--=== Mian Js ===-->
    <script src="{{ asset('assets/js/main.js ') }}"></script>


    </body>
    </html>