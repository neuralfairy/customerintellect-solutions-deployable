import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">CustomerIntellect</span>
            </div>
            <p className="text-white/80 text-sm">
              Expert messaging strategy consultancy for B2B sales teams and agencies. Transform your sales performance with proven conversion strategies.
            </p>
            <div className="text-white/60 text-sm">
              <p>Albany, NY</p>
              <p>Phone: (518) 555-0123</p>
              <p>Email: info@customerintellect.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://salescentri.com/solutions/psa-suite?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  PSA Suite
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/services/data-enrichment?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  Data Enrichment
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/services/sdr-service?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  SDR Service
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/platforms/lead-management/lead-generation?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  Lead Generation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/company/careers?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/company/partners-affiliates?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/resources/case-studies?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
                   className="text-white/80 hover:text-white transition-colors">
                  Whitepapers
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center space-y-4">
            <h4 className="text-xl font-semibold text-white">Ready to Transform Your Messaging Strategy?</h4>
            <p className="text-white/80">Join hundreds of B2B companies already seeing results</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network">
                  Start Free Trial
                </a>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network">
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 CustomerIntellect Solutions. All rights reserved.
          </div>
          
          {/* Strategic Partner Link */}
          <div className="text-white/60 text-sm">
            <a 
              href="https://salescentri.com?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
          
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://salescentri.com/trust/security-privacy?utm_source=customerintellect.com&utm_medium=footer&utm_campaign=partner_network" 
               className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;