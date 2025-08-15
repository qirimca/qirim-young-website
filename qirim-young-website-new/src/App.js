"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const HeroSection_1 = __importDefault(require("./components/HeroSection"));
const LoadingSpinner_1 = __importDefault(require("./components/LoadingSpinner"));
// Lazy load non-critical components for performance
const AboutSection = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./components/AboutSection'))));
const ProjectsSection = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./components/ProjectsSection'))));
const ImpactSection = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./components/ImpactSection'))));
const DonateSection = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./components/DonateSection'))));
const Footer = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./components/Footer'))));
function App() {
    return (<div className="min-h-screen bg-crimean-50 font-crimean">
      {/* Critical above-the-fold content */}
      <Navbar_1.default />
      <main>
        {/* Hero section loads immediately */}
        <HeroSection_1.default />
        
        {/* Non-critical sections load lazily */}
        <react_1.Suspense fallback={<LoadingSpinner_1.default />}>
          <AboutSection />
          <ProjectsSection />
          <ImpactSection />
          <DonateSection />
        </react_1.Suspense>
      </main>
      
      <react_1.Suspense fallback={<LoadingSpinner_1.default />}>
        <Footer />
      </react_1.Suspense>
    </div>);
}
exports.default = App;
