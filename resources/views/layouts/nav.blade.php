<header id="header-area" class="fixed-top">
        <!--== Header Top Start ==-->
        <div id="header-top" class="d-none d-xl-block">
            <div class="container">
                <div class="row">
               
                    <!--== Single HeaderTop Start ==-->
                    <div class="col-lg-3 text-left">
                    <i class="fa fa-map-marker"></i> 802/2, CI, Abidjan
                    </div>
                    <!--== Single HeaderTop End ==-->

                    <!--== Single HeaderTop Start ==-->
                    <div class="col-lg-3 text-center">
                    <i class="fa fa-mobile"></i> +225 89 85 12 24 / 59 85 10 67
                    </div>
                    <!--== Single HeaderTop End ==-->

                    <!--== Single HeaderTop Start ==-->
                    <div class="col-lg-3 text-center">
                    <i class="fa fa-clock-o"></i> Lun-Ven 09h00 - 17h00
                    </div>
                    <!--== Single HeaderTop End ==-->

                    <!--== Social Icons Start ==-->
                    <div class="col-lg-3 text-right">
                        <div class="header-social-icons">
                            <a href="#"><i class="fa fa-behance"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <!--== Social Icons End ==-->
                </div>
            </div>
        </div>
        <!--== Header Top End ==-->

        <!--== Header Bottom Start ==-->
        <div id="header-bottom">
            <div class="container">
                <div class="row">
                    <!--== Logo Start ==-->
                    <div class="col-lg-4">
                        <a href="index2.html" class="logo">
                        <img src="{{asset('assets/img/boli.png')}}" alt="JSOFT" />
                        </a>
                    </div>
                    <!--== Logo End ==-->

                    <!--== Main Menu Start ==-->
                    <div class="col-lg-8 d-none d-xl-block">
                    @if(Session::has('message'))
                <p class="alert {{ Session::get('alert-class', 'alert-info') }}">
                {{ Session::get('message') }}</p>
                @endif

                        <nav class="mainmenu alignright">
                            <ul>
                            <li className="active"><a href="{{url('/')}}">Acceuil</a>

                               <!-- <li><a href="about.html">About</a></li> -->
                                <li><a href="services.html">services</a>
                                <ul>
                                        <li><a href="{{url('/reservation_de_vehicule')}}">Demande véhicule pour apprentissage</a></li>
                                        
                                       
                                    </ul>
                                </li>
                             
                               
                               
                                <li><a href="#">Contact</a></li>
                                @guest

                                <li><a href="#">Compte</a>
                                <ul>
                            <li>
                                <a href="{{ route('login') }}">{{ __('Connexion') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li>
                                    <a href="{{ route('register') }}">{{ __('Inscription') }}</a>
                                </li>
                            @endif
                            </ul>
                            </li>
                            
                        @else
                        <li >
                                <a  href="#" >
                                    {{ substr(Auth::user()->name, 0, 12) }} 
                                </a>

                                <ul >
                                @if(Auth::user()->isAdmin)
                                <li>
                                    <a href="{{ url('/v1/admin_area/dashboard') }}">{{ __('Admin panel') }}</a>
                                </li>
                                @endif
                                   <li>
                                    <a  href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Déconnexion') }}
                                    </a>
                                    </li>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </ul>
                            </li>
                        @endguest
                                
                            
                            </ul>
                        </nav>
                    </div>
                    <!--== Main Menu End ==-->
                </div>
            </div>
        </div>
        <!--== Header Bottom End ==-->
    </header>