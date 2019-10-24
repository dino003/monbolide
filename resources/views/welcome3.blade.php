<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>
    </body>
</html>

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


    <div class="preloader">
        <div class="preloader-spinner">
            <div class="loader-content">
                <img src="{{asset('assets/img/preloader.gif')}}" alt="JSOFT" />
            </div>
        </div>
    </div>