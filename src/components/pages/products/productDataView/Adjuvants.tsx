import { Box, Divider } from "@mui/material";
import ProductDescription from "../../../utils/ProducDescription";
const assist = '/images/assist.svg'
const backrow = '/images/backrow.svg' 
const kantor = '/images/kantor.svg' 
const union = '/images/union.svg' 

export default function Adjuvants(){
    return(
        <Box>
            <ProductDescription
            image={assist}
            productCategory="Water Conditioner"
            name="Assist">
                The characteristics of water used in the spray tank can have a profound influence on the effectiveness of crop protection products. Hard water and high pH can be detrimental to the performance of crop protection products by preventing uptake into leaves. Assist is a water conditioner for use with selective and non-selective herbicides to improve spray water quality by softening and buffering spray water to pH6-6.5, in order to optimise herbicide uptake and performance.
            </ProductDescription>    

            <Divider 
            sx={{
                marginBottom:3 
            }}/>

            <ProductDescription
            image={union}
            productCategory="Pod Sticker"
            name="Union">
                Pod shatter arises from the swelling of ripe pods in wet weather, and contracting in dry weather. In the run up to a late harvest, brittle over-mature crops are particularly at risk of pod shatter, as plants become older and drier with age. Iskay is a pod sticker designed to prevent pod shatter by coating the crop with a thin film of polymer, best described as a micro-mesh. This holds brittle pods together to prevent shattering, with sufficient elasticity to allow for the final stages of pod fill to maximise yield.
            </ProductDescription> 
            
            <Divider 
            sx={{
                marginBottom:3 
            }}/>

            <ProductDescription
            image={backrow}
            productCategory="Adjuvant"
            name="Backrow Maxx">
                Take the performance uncertainty and safety risks out of your residual herbicide programme with Backrow’s reliability & safety – You can count on it! Pre-emergence residual herbicides have become vital in the war against black-grass and other hard to control grassweeds such as ryegrass and brome spp. Achieving the best results is essential to minimise population growth and the threat of further weed resistance, but like most aspects of crop production, their performance is highly dependant on the weather. The addition of adjuvant Backrow pre- and peri-emergence limits weather constraints on herbicide performance and protects crop and groundwater safety, making it a crucial partner for both reliable and safe herbicide efficacy at the early weed control timing.
            </ProductDescription> 
            
            <Divider 
            sx={{
                marginBottom:3 
            }}/>

            <ProductDescription
            image={kantor}
            productCategory="Adjuvant"
            name="Kantor">
                Kantor is a unique activator adjuvant that brings unbeatable performance to crop protection sprays by removing the physical and chemical constraints that restrict activity and efficacy. Bringing compatibility to tank mixes, reliability in suboptimal application conditions, and versatility in use, Kantor is your perfect match for plant protection programmes to maximise performance and returns. Kantor’s unique ability to influence every stage of the spray delivery process makes it a hugely valuable addition to many of the plant protection sprays you’ll be making to your crops. With multiple herbicides, fungicides and PGRs often added to the spray tank at the same time in busy springs, it’s crucial they mix well together to make sure they perform when, where and how you need them to. With Kantor you can be confident that products applied to the tank are stable, safe and active, and delivered to/inside the leaf/ear where they are needed. It’s an unbeatable adjuvant. Make your crop protection sprays unbeatable with Kantor – it’s the perfect match for your spring spray programmes.
            </ProductDescription> 
        </Box>
    );
}