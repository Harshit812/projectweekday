export const NumberOfEmployeesOptions = [
    { label: "1-10", value: "10" },
    { label: "11-20", value: "20" },
    { label: "21-50", value: "50" },
    { label: "51-100", value: "100" },
    { label: "101-200", value: "200" },
    { label: "201-500", value: "500" },
    { label: "500+", value: "500" },
  ];
  
  export const ExperienceOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ];
  
  export const RemoteOptions = [
    { label: "Remote", value: "remote" },
    { label: "Hybrid", value: "hybrid" },
    { label: "In-office", value: "office" },
  ];
  
  export const SalaryOptions = [
    { label: "0L", value: "110" },
    { label: "10L", value: "110" },
    { label: "20L", value: "1120" },
    { label: "30L", value: "2150" },
    { label: "40L", value: "51100" },
    { label: "50L", value: "101200" },
    { label: "60L", value: "201500" },
    { label: "70L", value: "500" },
  ];
  
  export const RolesOption = [
    {
      group: "engineering",
      options: [
        { value: "backend", label: "Backend" },
        { value: "frontend", label: "Frontend" },
        { value: "fullstack", label: "Fullstack" },
        { value: "iOS", label: "IOS" },
        { value: "flutter", label: "Flutter" },
        { value: "react native", label: "React Native" },
        { value: "android", label: "Android" },
        { value: "tech lead", label: "Tech Lead" },
        { value: "dev-ops", label: "Dev-Ops" },
        { value: "data engineer", label: "Data Engineer" },
        { value: "data science", label: "Data Science" },
        { value: "computer-vision", label: "Computer-Vision" },
        { value: "nlp", label: "NLP" },
        { value: "deep-learning", label: "Deep-Learning" },
        { value: "test / qa", label: "Test / QA" },
        { value: "Web3", label: "Web3" },
        { value: "sre", label: "SRE" },
        { value: "data-infrastructure", label: "Data-Infrastructure" },
      ],
    },
    {
      group: "design",
      options: [
        { value: "designer", label: "Designer" },
        { value: "design_manager", label: "Design Manager" },
        { value: "graphic_designer", label: "Graphic Designer" },
        { value: "product_designer", label: "Product Designer" },
      ],
    },
  ];
  
  export const DropDowns = [
    {
      key: "numberOfEmployees",
      label: "Number Of Employees",
      options: NumberOfEmployeesOptions,
    },
    {
      key: "experience",
      label: "Experience",
      options: ExperienceOptions,
    },
    {
      key: "remote",
      label: "Remote",
      options: RemoteOptions,
    },
    {
      key: "salary",
      label: "Minimum Base Pay salary",
      options: SalaryOptions,
    },
  ];