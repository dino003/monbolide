@extends('layouts.main')

@section('content')
<br /> <br />
    <!--== Login Page Content Start ==-->
    <section id="lgoin-page-wrap" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-8 m-auto">
                	<div class="login-page-content">
                		<div class="login-form">
                			<h3>Bienvenue !</h3>
							<form method="POST" action="{{ route('login') }}">
                       			 @csrf
								<div class="username">
									<input id="email" type="email"
                                 class="form-control @error('email') is-invalid @enderror"
                                  name="email" value="{{ old('email') }}" required autocomplete="email"
                                   autofocus>
									@error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
								</div>
								<div class="password">
									<input id="password" type="password"
                                 class="form-control @error('password') is-invalid @enderror"
                                  name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
								</div>

								<div class="log-btn">
									<button type="submit"><i class="fa fa-sign-in"></i> Connexion</button>
								</div>
							</form>
                		</div>
                		
                		<div class="login-other">
                			<span class="or">ou</span>
                			<a href="{{url('/redirect_facebook')}}" class="login-with-btn facebook">
							<i class="fa fa-facebook"></i> Connexion avec Facebook</a>
                			<a href="{{url('/redirect_google')}}" class="login-with-btn google">
							<i class="fa fa-google"></i> Connexion avec Google</a>
                		</div>
                		
                		
                	</div>
                </div>
        	</div>
        </div>
    </section>

@endsection