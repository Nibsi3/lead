'use client'

import { useMemo } from 'react'
import { notFound, useParams } from 'next/navigation'
import templatesData from '@/lib/templates.json'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Header from '@/components/marketing/header'
import Footer from '@/components/marketing/footer'

import EcommerceLandingPage from '@/app/(marketing)/templates/ecommerce-landing'
import BlogLandingPage from '@/app/(marketing)/templates/blog-landing'
import RestaurantLandingPage from '@/app/(marketing)/templates/restaurant-landing'

// Business Templates
import ModernCorporate from '@/components/templates/business/modern-corporate'
import Startup from '@/components/templates/business/startup'
import ConsultingFirm from '@/components/templates/business/consulting-firm'
import FinancialServices from '@/components/templates/business/financial-services'
import LegalFirm from '@/components/templates/business/legal-firm'
import MarketingAgency from '@/components/templates/business/marketing-agency'
import Insurance from '@/components/templates/business/insurance'
import Logistics from '@/components/templates/business/logistics'
import HumanResources from '@/components/templates/business/human-resources'
import GeneralBusiness from '@/components/templates/business/general-business'

// E-commerce Templates
import FashionBoutique from '@/components/templates/ecommerce/fashion-boutique'
import ElectronicsHub from '@/components/templates/ecommerce/electronics-hub'
import HomeGoods from '@/components/templates/ecommerce/home-goods'
import ArtisanCrafts from '@/components/templates/ecommerce/artisan-crafts'
import Bookstore from '@/components/templates/ecommerce/bookstore'
import SportsGear from '@/components/templates/ecommerce/sports-gear'
import LuxuryItems from '@/components/templates/ecommerce/luxury-items'
import KidsToys from '@/components/templates/ecommerce/kids-toys'
import GroceryStore from '@/components/templates/ecommerce/grocery-store'
import GeneralStore from '@/components/templates/ecommerce/general-store'

// Portfolio & Creative Templates
import Photographer from '@/components/templates/portfolio/photographer'
import GraphicDesigner from '@/components/templates/portfolio/graphic-designer'
import Writer from '@/components/templates/portfolio/writer'
import WebDeveloper from '@/components/templates/portfolio/web-developer'
import Artist from '@/components/templates/portfolio/artist'
import Musician from '@/components/templates/portfolio/musician'
import Architect from '@/components/templates/portfolio/architect'
import Filmmaker from '@/components/templates/portfolio/filmmaker'
import Illustrator from '@/components/templates/portfolio/illustrator'
import CreativeAgency from '@/components/templates/portfolio/creative-agency'

// Blog & Personal Templates
import TravelBlog from '@/components/templates/blog/travel-blog'
import FoodBlog from '@/components/templates/blog/food-blog'
import LifestyleBlog from '@/components/templates/blog/lifestyle-blog'
import TechBlog from '@/components/templates/blog/tech-blog'
import PersonalJournal from '@/components/templates/blog/personal-journal'
import FashionBlog from '@/components/templates/blog/fashion-blog'
import ParentingBlog from '@/components/templates/blog/parenting-blog'
import FinanceBlog from '@/components/templates/blog/finance-blog'
import DiyBlog from '@/components/templates/blog/diy-blog'
import ClassicBlog from '@/components/templates/blog/classic-blog'

// Real Estate Templates
import RealtyAgency from '@/components/templates/real-estate/realty-agency';
import SingleAgent from '@/components/templates/real-estate/single-agent';
import LuxuryProperties from '@/components/templates/real-estate/luxury-properties';
import ApartmentRentals from '@/components/templates/real-estate/apartment-rentals';
import CommercialRealEstate from '@/components/templates/real-estate/commercial-real-estate';
import NewDevelopments from '@/components/templates/real-estate/new-developments';
import VacationRentals from '@/components/templates/real-estate/vacation-rentals';
import PropertyManagement from '@/components/templates/real-estate/property-management';
import LandSales from '@/components/templates/real-estate/land-sales';
import RealEstateBlog from '@/components/templates/real-estate/real-estate-blog';

// Restaurant & Food Templates
import FineDining from '@/components/templates/restaurant/fine-dining'
import CozyCafe from '@/components/templates/restaurant/cozy-cafe'
import FastCasual from '@/components/templates/restaurant/fast-casual'
import Bakery from '@/components/templates/restaurant/bakery'
import Pizzeria from '@/components/templates/restaurant/pizzeria'
import FoodTruck from '@/components/templates/restaurant/food-truck'
import BarLounge from '@/components/templates/restaurant/bar-lounge'
import CateringService from '@/components/templates/restaurant/catering-service'
import JuiceBar from '@/components/templates/restaurant/juice-bar'
import FamilyRestaurant from '@/components/templates/restaurant/family-restaurant'

// Non-Profit Templates
import CharityFoundation from '@/components/templates/non-profit/charity-foundation';
import CommunityEvent from '@/components/templates/non-profit/community-event';
import AnimalShelter from '@/components/templates/non-profit/animal-shelter';
import EnvironmentalCause from '@/components/templates/non-profit/environmental-cause';
import EducationalProgram from '@/components/templates/non-profit/educational-program';
import HealthOrganization from '@/components/templates/non-profit/health-organization';
import SocialJustice from '@/components/templates/non-profit/social-justice';
import VolunteerHub from '@/components/templates/non-profit/volunteer-hub';
import ReligiousOrganization from '@/components/templates/non-profit/religious-organization';
import ArtsCulture from '@/components/templates/non-profit/arts-culture';

// Tech & SaaS Templates
import SaasProduct from '@/components/templates/tech/saas-product';
import MobileApp from '@/components/templates/tech/mobile-app';
import AiStartup from '@/components/templates/tech/ai-startup';
import DeveloperTool from '@/components/templates/tech/developer-tool';
import FintechSolution from '@/components/templates/tech/fintech-solution';
import Cybersecurity from '@/components/templates/tech/cybersecurity';
import ItServices from '@/components/templates/tech/it-services';
import DataAnalytics from '@/components/templates/tech/data-analytics';
import BlockchainProject from '@/components/templates/tech/blockchain-project';
import GamingCompany from '@/components/templates/tech/gaming-company';

// Services Templates
import PlumbingHvac from '@/components/templates/services/plumbing-hvac';
import Landscaping from '@/components/templates/services/landscaping';
import CleaningService from '@/components/templates/services/cleaning-service';
import PersonalTrainer from '@/components/templates/services/personal-trainer';
import HairSalon from '@/components/templates/services/hair-salon';
import FinancialAdvisor from '@/components/templates/services/financial-advisor';
import Tutor from '@/components/templates/services/tutor';
import Handyman from '@/components/templates/services/handyman';
import EventPlanner from '@/components/templates/services/event-planner';
import GeneralContractor from '@/components/templates/services/general-contractor';

// Other Templates
import ComingSoon from '@/components/templates/other/coming-soon';
import PersonalCV from '@/components/templates/other/personal-cv';
import WeddingInvite from '@/components/templates/other/wedding-invite';
import Conference from '@/components/templates/other/conference';
import Podcast from '@/components/templates/other/podcast';
import OnlineCourse from '@/components/templates/other/online-course';
import CommunityForum from '@/components/templates/other/community-forum';
import MusicFestival from '@/components/templates/other/music-festival';
import PoliticalCampaign from '@/components/templates/other/political-campaign';
import GenericLandingPage from '@/components/templates/other/generic-landing-page';

const getCategoryAndTemplate = (templateId: string) => {
    for (const category of templatesData.categories) {
        const template = category.templates.find(t => t.id === templateId);
        if (template) {
            return { category: category.name, template };
        }
    }
    return { category: null, template: null };
}

const TemplateComponentMap: { [key: string]: React.FC<{ template: any }> } = {
    // Business & Corporate
    'corp-1': ModernCorporate,
    'corp-2': Startup,
    'corp-3': ConsultingFirm,
    'corp-4': FinancialServices,
    'corp-5': LegalFirm,
    'corp-6': MarketingAgency,
    'corp-7': Insurance,
    'corp-8': Logistics,
    'corp-9': HumanResources,
    'corp-10': GeneralBusiness,
    // E-commerce & Retail
    'ecom-1': FashionBoutique,
    'ecom-2': ElectronicsHub,
    'ecom-3': HomeGoods,
    'ecom-4': ArtisanCrafts,
    'ecom-5': Bookstore,
    'ecom-6': SportsGear,
    'ecom-7': LuxuryItems,
    'ecom-8': KidsToys,
    'ecom-9': GroceryStore,
    'ecom-10': GeneralStore,
    // Portfolio & Creative
    'port-1': Photographer,
    'port-2': GraphicDesigner,
    'port-3': Writer,
    'port-4': WebDeveloper,
    'port-5': Artist,
    'port-6': Musician,
    'port-7': Architect,
    'port-8': Filmmaker,
    'port-9': Illustrator,
    'port-10': CreativeAgency,
    // Blog & Personal
    'blog-11': TravelBlog,
    'blog-12': FoodBlog,
    'blog-13': LifestyleBlog,
    'blog-14': TechBlog,
    'blog-15': PersonalJournal,
    'blog-16': FashionBlog,
    'blog-17': ParentingBlog,
    'blog-18': FinanceBlog,
    'blog-19': DiyBlog,
    'blog-20': ClassicBlog,
    // Real Estate
    're-1': RealtyAgency,
    're-2': SingleAgent,
    're-3': LuxuryProperties,
    're-4': ApartmentRentals,
    're-5': CommercialRealEstate,
    're-6': NewDevelopments,
    're-7': VacationRentals,
    're-8': PropertyManagement,
    're-9': LandSales,
    're-10': RealEstateBlog,
    // Restaurant & Food
    'food-1': FineDining,
    'food-2': CozyCafe,
    'food-3': FastCasual,
    'food-4': Bakery,
    'food-5': Pizzeria,
    'food-6': FoodTruck,
    'food-7': BarLounge,
    'food-8': CateringService,
    'food-9': JuiceBar,
    'food-10': FamilyRestaurant,
    // Non-Profit & Charity
    'np-1': CharityFoundation,
    'np-2': CommunityEvent,
    'np-3': AnimalShelter,
    'np-4': EnvironmentalCause,
    'np-5': EducationalProgram,
    'np-6': HealthOrganization,
    'np-7': SocialJustice,
    'np-8': VolunteerHub,
    'np-9': ReligiousOrganization,
    'np-10': ArtsCulture,
    // Tech & SaaS
    'tech-1': SaasProduct,
    'tech-2': MobileApp,
    'tech-3': AiStartup,
    'tech-4': DeveloperTool,
    'tech-5': FintechSolution,
    'tech-6': Cybersecurity,
    'tech-7': ItServices,
    'tech-8': DataAnalytics,
    'tech-9': BlockchainProject,
    'tech-10': GamingCompany,
    // Services
    'serv-1': PlumbingHvac,
    'serv-2': Landscaping,
    'serv-3': CleaningService,
    'serv-4': PersonalTrainer,
    'serv-5': HairSalon,
    'serv-6': FinancialAdvisor,
    'serv-7': Tutor,
    'serv-8': Handyman,
    'serv-9': EventPlanner,
    'serv-10': GeneralContractor,
    // Other
    'other-1': ComingSoon,
    'other-2': PersonalCV,
    'other-3': WeddingInvite,
    'other-4': Conference,
    'other-5': Podcast,
    'other-6': OnlineCourse,
    'other-7': CommunityForum,
    'other-8': MusicFestival,
    'other-9': PoliticalCampaign,
    'other-10': GenericLandingPage,
};


const CategorySpecificLanding = ({ templateId, template }: { templateId: string, template: any }) => {
    const Component = TemplateComponentMap[templateId];

    if (Component) {
        return <Component template={template} />;
    }

    // Fallback for other categories
    const { category } = getCategoryAndTemplate(templateId);
    switch (category) {
        case 'E-commerce & Retail':
            return <EcommerceLandingPage template={template} />;
        case 'Blog & Personal':
            return <BlogLandingPage template={template} />;
        case 'Restaurant & Food':
            return <RestaurantLandingPage template={template} />;
        default:
             // A sensible default for categories not yet uniquely componentized
            return <GeneralBusiness template={template} />;
    }
};

export default function TemplatePreviewPage() {
    const params = useParams()
    const templateId = params.templateId as string

    const { template } = useMemo(() => 
        getCategoryAndTemplate(templateId)
    , [templateId])

    if (!template) {
        notFound()
    }

    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
         <div className="fixed bottom-4 right-4 z-50">
            <Button asChild size="lg">
                <Link href={`/admin/create/from-scratch?templateId=${template.id}`}>
                    Use This Template
                </Link>
            </Button>
        </div>
        <main className="flex-1">
            <CategorySpecificLanding templateId={template.id} template={template} />
        </main>
        <Footer />
      </div>
    )
}
