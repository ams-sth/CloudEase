import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/images/SarahJohnson.jpg",
      comment: `CloudEase consulting services helped us strategize and implement 
                the right cloud solutions, resulting in enhanced agility and 
                efficiency. Their team was responsive, knowledgeable, and delivered beyond our expectations.`,
    },
    {
      name: "John Smith",
      role: "IT Manager",
      image: "/images/JohnSmith.jpg",
      comment: `CloudEase team helped us seamlessly migrate our infrastructure to 
                the cloud, improving scalability and reducing costs. Their expertise 
                and support have been exceptional, and we highly recommend their 
                cloud solutions.`,
    },
    {
      name: "Robert Johnson",
      role: "IT Director",
      image: "/images/RobertJohnson.jpg",
      comment: `CloudEase has been an invaluable partner in our digital
                transformation journey. Their managed services have ensured our
                cloud environment operates smoothly, securely, and optimally."`,
    },
    {
      name: "Emma Davis",
      role: "Director of Operations",
      image: "/images/EmmaDavis.jpg",
      comment: `Choosing CloudEase for our cloud migration was the best decision we
              made.Their team took care of every aspect, ensuring a seamless
              transition with minimal disruption.`,
    },
    {
      name: "Lisa Andersson",
      role: "Operations Manager",
      image: "/images/LisaAnderson.jpg",
      comment: `We couldn't be happier with the cloud deployment services by
                CloudEase. They helped us set up a robust cloud infrastructure that
                meets our growing needs.`,
    },
    {
      name: "David Wilson",
      role: "Director Operations",
      image: "/images/DavidWilson.jpg",
      comment: `CloudEase's cloud solutions have revolutionized our business
                operations. Their platform-as-a-service (PaaS) offering has enabled
                us to accelerate application development and deployment, saving us
                significant time and resources.`,
    },
  ],
};
const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
});

export const selectReviews = (state) => state.reviews.feedbacks;
export default reviewSlice.reducer;
