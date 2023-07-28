import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from '../../../assets/images/logo.svg';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="col-lg-6 col-md-12">
                <div className="company_detail">
                    <h4 className="logo"><img src={logo} alt=""/> Alpino</h4>
                    <h3>The ultimate <strong>Bootstrap 4</strong> Admin Dashboard</h3>
                    <p>Alpino is fully based on HTML5 + CSS3 Standards. Is fully responsive and clean on every device
                        and every browser</p>
                    <div className="footer">
                        <ul className="social_link list-unstyled">
                            <li><Link href="https://thememakker.com/" title="ThemeMakker"><i
                                className="zmdi zmdi-globe"></i></Link></li>
                            <li><Link href="https://themeforest.net/user/thememakker" title="Themeforest"><i
                                className="zmdi zmdi-shield-check"></i></Link></li>
                            <li><Link href="https://www.linkedin.com/company/thememakker/" title="LinkedIn"><i
                                className="zmdi zmdi-linkedin"></i></Link></li>
                            <li><Link href="https://www.facebook.com/thememakkerteam" title="Facebook"><i
                                className="zmdi zmdi-facebook"></i></Link></li>
                            <li><Link href="http://twitter.com/thememakker" title="Twitter"><i
                                className="zmdi zmdi-twitter"></i></Link></li>
                            <li><Link href="http://plus.google.com/+thememakker" title="Google plus"><i
                                className="zmdi zmdi-google-plus"></i></Link></li>
                            <li><Link href="https://www.behance.net/thememakker" title="Behance"><i
                                className="zmdi zmdi-behance"></i></Link></li>
                        </ul>
                        <hr/>
                            <ul>
                                <li><Link href="http://thememakker.com/contact/" target="_blank">Contact Us</Link></li>
                                <li><Link href="http://thememakker.com/about/" target="_blank">About Us</Link></li>
                                <li><Link href="http://thememakker.com/services/" target="_blank">Services</Link></li>
                                <li><Link href="">FAQ</Link></li>
                            </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 col-md-12 offset-lg-1">
                <div className="card-plain">
                    <div className="header">
                        <h5>Log in</h5>
                    </div>
                    <form className="form" onSubmit={submit}>
                        <div className="input-group">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i
                                        className="zmdi zmdi-account-circle"></i></span>
                                </div>
                        </div>
                        <div className="input-group">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-control"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="zmdi zmdi-lock"></i></span>
                                </div>
                        </div>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>
                        <PrimaryButton className="btn btn-primary btn-round btn-block" disabled={processing}>SIGN IN</PrimaryButton>
                    </form>
                    <div className="footer">
                        {/*<PrimaryButton className="btn btn-primary btn-simple btn-round btn-block">SIGN UP</PrimaryButton>*/}
                    </div>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="link"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
            </div>

        </GuestLayout>
    );
}
