@extends('layouts.main')

@section('content')

      <!--== Login Page Content Start ==-->
      <section id="lgoin-page-wrap" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-8 m-auto">
                	<div class="login-page-content">
                		<div class="login-form">
                			<h3>Inscription</h3>
							<form method="POST" action="{{ route('register') }}">
                       			 @csrf							
								<div class="username">
	
									  <input id="name" type="text"
                                 class="form-control @error('name') is-invalid @enderror"
                                  name="name" placeholder="Votre Nom" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
									@enderror
								</div>
								<div class="username">
									<input id="email"
									placeholder="Adresse email"
									 type="email" class="form-control @error('email') is-invalid @enderror"
									  name="email" value="{{ old('email') }}" required autocomplete="email">

									@error('email')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror                                 

								</div>
								<div class="password">
									<input id="password"
									placeholder="Mot de passe"
									 type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

										@error('password')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
										@enderror
								</div>

								<div class="password">
								<input id="password-confirm"
								 type="password" class="form-control"
								 placeholder="confirmation"
								  name="password_confirmation" required autocomplete="new-password">
									
								</div>
								<div class="log-btn">
									<button type="submit"><i class="fa fa-check-square"></i> Enregistrer</button>
								</div>
							</form>
                		</div>
                		
                		<div class="login-other">
                			<span class="or">Inscription rapide</span>
                			<a href="{{url('/redirect_facebook')}}" class="login-with-btn facebook"><i class="fa fa-facebook"></i> Inscription via Facebook</a>
                			<a href="{{url('/redirect_google')}}" class="login-with-btn google"><i class="fa fa-google"></i> Inscription via Google</a>
                		</div>
                		<div class="create-ac">
                			<p>Vous avez deja un compte ? <a href="{{route('login')}}">Connectez-vous</a></p>
                		</div>
         
                	</div>
                </div>
        	</div>
        </div>
    </section>

@endsection