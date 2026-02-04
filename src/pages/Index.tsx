import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ForthcomingEngagements } from "@/components/home/ForthcomingEngagements";
import { Quote } from "@/components/home/Quote";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <Quote />
      <ForthcomingEngagements />
    </Layout>
  );
};

export default Index;
