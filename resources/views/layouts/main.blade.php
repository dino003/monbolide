<!DOCTYPE html>
<html class="no-js" lang="zxx">

@include('layouts.header')

<body class="loader-active">

    <!--== Preloader Area Start ==-->
    <!--
    <div class="preloader">
        <div class="preloader-spinner">
            <div class="loader-content">
                <img src="assets/img/preloader.gif" alt="JSOFT">
            </div>
        </div>
    </div>
    -->
    <!--== Preloader Area End ==-->

    <!--== Header Area Start ==-->
    @include('layouts.nav')
    <!--== Header Area End ==-->

        @yield('content')
    <!--== Articles Area End ==-->

    <!--== Footer Area Start ==-->
    @include('layouts.footer')
    <!--== Footer Area End ==-->

    <!--== Scroll Top Area Start ==-->
    <div class="scroll-top">
        <img src="assets/img/scroll-top.png" alt="JSOFT">
    </div>
    <!--== Scroll Top Area End ==-->

    <!--=======================Javascript============================-->
    <!--=== Jquery Min Js ===-->
    <script src="{{asset('assets/js/jquery-3.2.1.min.js')}}"></script>
    <!--=== Jquery Migrate Min Js ===-->
    <script src="{{asset('assets/js/jquery-migrate.min.js')}}"></script>
    <!--=== Popper Min Js ===-->
    <script src="{{asset('assets/js/popper.min.js')}}"></script>
    <!--=== Bootstrap Min Js ===-->
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <!--=== Gijgo Min Js ===-->
    <script src="{{asset('assets/js/plugins/gijgo.js')}}"></script>
    <!--=== Vegas Min Js ===-->
    <script src="{{asset('assets/js/plugins/vegas.min.js')}}"></script>
    <!--=== Isotope Min Js ===-->
    <script src="{{asset('assets/js/plugins/isotope.min.js')}}"></script>
    <!--=== Owl Caousel Min Js ===-->
    <script src="{{asset('assets/js/plugins/owl.carousel.min.js')}}"></script>
    <!--=== Waypoint Min Js ===-->
    <script src="{{asset('assets/js/plugins/waypoints.min.js')}}"></script>
    <!--=== CounTotop Min Js ===-->
    <script src="{{asset('assets/js/plugins/counterup.min.js')}}"></script>
    <!--=== YtPlayer Min Js ===-->
    <script src="{{asset('assets/js/plugins/mb.YTPlayer.js')}}"></script>
    <!--=== Magnific Popup Min Js ===-->
    <script src="{{asset('assets/js/plugins/magnific-popup.min.js')}}"></script>
    <!--=== Slicknav Min Js ===-->
    <script src="{{asset('assets/js/plugins/slicknav.min.js')}}"></script>

    <!--=== Mian Js ===-->
    <script src="{{asset('assets/js/main.js')}}"></script>
    <script src="{{asset('js/DemandeDeVehiculeApprentissageForm.js')}}"></script>


    @yield('script')

</body>

</html>