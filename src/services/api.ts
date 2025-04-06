import { courseSelectorService, CourseRecommendation } from './courseSelector';

// API service to interact with the Python backend

interface FormData {
  profession: string;
}

export const submitUserData = async (data: FormData) => {
  try {
    console.log("Getting recommendations for profession:", data.profession);
    
    // Call the OpenAI-based course selector service
    const recommendations = await courseSelectorService.getRecommendations({
      studentId: "12345", // You might want to get this from user data
      name: "Student", // You might want to get this from user data
      careerGoals: data.profession || "Software Engineer" // Get from form data
    });
    
    console.log("Recommendations received:", recommendations);
    
    return {
      success: true,
      message: "Recommendations generated successfully",
      recommendations: recommendations
    };
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to get recommendations");
  }
};
