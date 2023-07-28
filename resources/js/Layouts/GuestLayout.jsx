import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import '../../assets/plugins/bootstrap/css/bootstrap.min.css';
import '../../assets/css/main.css';
import '../../assets/css/color_skins.css';
import '../../assets/bundles/libscripts.bundle.js';
import '../../assets/bundles/vendorscripts.bundle.js';

export default function Guest({ children }) {
    return (
        <body className="theme-black">
        <div className="authentication">
            <div className="container">
                <div className="col-md-12 content-center">
                    <div className="row">
                {children}
            </div>
        </div>
            </div>
        </div>
        </body>
    );
}
