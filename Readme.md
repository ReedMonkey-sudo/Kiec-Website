 Foreign Education Consultancy – Student Management System

 1. Project Overview

Design a modern, professional, responsive web-based Student Management System (SMS) for a foreign education consultancy.

The application will be used by consultancy administrators and counsellors to manage student records, evaluate academic qualifications, record English proficiency scores, manage study-abroad preferences, and track admission/application progress.

This is an internal business management application, not a public-facing student portal.

The design should feel like a premium SaaS CRM dashboard, with a clean interface, intuitive navigation, professional typography, consistent spacing, and reusable UI components.

 2. Design System

Visual direction:
- Modern SaaS dashboard.
- Professional education consultancy branding.
- Clean and minimal layout.
- Desktop-first responsive design.
- Light theme.
- White and light-grey backgrounds.
- Navy-blue sidebar.
- Royal blue primary actions.
- Soft shadows and subtle borders.
- Rounded cards and form elements.

Suggested colors:
- Primary: 2563EB
- Secondary: 1E3A8A
- Sidebar: 14213D
- Background: F8FAFC
- Surface: FFFFFF
- Text primary: 0F172A
- Text secondary: 64748B
- Success: 16A34A
- Warning: F59E0B
- Danger: DC2626

Typography:
- Use Inter or similar modern sans-serif.
- Clear hierarchy between headings, labels and body text.
- Consistent spacing and readable form labels.

 3. Application Layout

Create a reusable dashboard layout.

Left sidebar navigation:

1. Dashboard
2. Students
3. Applications
4. Countries
5. Universities
6. Counsellors
7. Follow-ups
8. Reports
9. Settings

Sidebar requirements:
- Consultancy logo and name at the top.
- Icons beside navigation labels.
- Highlight active navigation.
- Collapsible sidebar.
- Admin profile at the bottom.

Top navigation:
- Global student search.
- Notification icon.
- Admin profile.
- User dropdown.
- Breadcrumb navigation.

 4. Dashboard Screen

Create an informative admin dashboard.

Statistics cards:
- Total Students
- New Students
- Applying
- Applied
- Approved
- Rejected

Each card should include:
- Large numerical value.
- Relevant icon.
- Label.
- Percentage change or comparison where meaningful.

Charts:

A. Student Application Status:
- New
- Counselling
- Applying
- Applied
- Offer Received
- Visa Processing
- Approved
- Rejected
- On Hold

Use a donut chart.

B. Students by Preferred Country:
- Australia
- Canada
- UK
- USA
- Japan
- South Korea
- Germany
- Italy
- Other

Use a bar chart.

C. Student Registration Trends:
- Monthly student registrations.
- Line chart.

Recent Activities:
- New student registered.
- Student information updated.
- Application status changed.
- New English test score added.
- Student application approved.

Quick Actions:
- Add New Student.
- View All Students.
- View Applications.
- Generate Report.

 5. Student Management Screen

Create a complete student listing page.

Page header:
- Title: Students
- Subtitle: Manage and organize consultancy student records.
- Primary button: + Add New Student.

Search functionality:
- Search by student name.
- Search by phone number.
- Search by email.
- Search by student ID.

Filters:
- Education Level.
- Preferred Country.
- English Test Type.
- Application Status.
- Assigned Counsellor.
- Registration Date.

Student table columns:

1. Student ID
2. Student Name
3. Phone Number
4. Education Level
5. GPA / Percentage
6. English Test
7. Overall Score
8. Preferred Country
9. Application Status
10. Assigned Counsellor
11. Registration Date
12. Actions

Action buttons:
- View Student.
- Edit Student.
- Delete Student.

Include:
- Pagination.
- Rows per page.
- Sortable columns.
- Empty state.
- Loading state.
- Delete confirmation modal.
- Export CSV option.

 6. Add New Student Screen

Create a professional multi-step student registration form.

Use a stepper at the top with four steps:

1. Personal Information
2. Academic Information
3. English Proficiency
4. Study Preferences

Display progress between steps.

 STEP 1 – Personal Information

Fields:

- Full Name (required)
- Date of Birth
- Gender (Male / Female / Other / Prefer not to say)
- Phone Number (required)
- Alternative Phone Number
- Email Address
- Permanent Address
- Current Address
- Passport Number
- Passport Expiry Date
- Profile Photo (optional)

 STEP 2 – Academic Information

Fields:

- Current / Highest Education Level:
  - SEE
  - +2
  - Bachelor's
  - Master's

- Institution Name
- Faculty / Stream
- Course / Major Subject
- Board / University
- Passed Year
- GPA / Percentage
- Grading System:
  - GPA (4.0 scale)
  - GPA (other scale)
  - Percentage
  - Other

- Study Gap (years)
- Backlogs (Yes / No)
- Number of Backlogs
- Academic Remarks

Allow students to have multiple academic records when necessary.

 STEP 3 – English Proficiency

Fields:

English Test Type:
- IELTS
- TOEFL
- PTE
- Duolingo
- Other
- Not Taken

Test Status:
- Not Taken
- Booked
- Completed
- Expired

Display score fields dynamically based on the selected test.

IELTS:
- Overall Band
- Listening
- Reading
- Writing
- Speaking
- Test Date
- Test Report Number (optional)

TOEFL:
- Total Score
- Reading
- Listening
- Speaking
- Writing
- Test Date

PTE:
- Overall Score
- Listening
- Reading
- Speaking
- Writing
- Test Date

Duolingo:
- Overall Score
- Literacy
- Comprehension
- Conversation
- Production
- Test Date

If Not Taken, display:
- Expected Test Date
- Preparation Status
- Remarks

 STEP 4 – Study Preferences

Fields:

Preferred Country:
- Australia
- Canada
- United Kingdom
- USA
- Japan
- South Korea
- Germany
- Italy
- Spain
- New Zealand
- Other

Allow multiple preferred countries and assign a primary preference.

Other fields:
- Preferred Course / Subject
- Preferred Education Level:
  - Diploma
  - Bachelor's
  - Master's
  - PhD

- Preferred Intake
- Preferred University (optional)
- Annual Tuition Budget
- Total Study Budget
- Funding Source:
  - Self-funded
  - Family-sponsored
  - Education Loan
  - Scholarship
  - Other

- Additional Requirements
- Student Remarks

Form footer:
- Previous
- Save as Draft
- Next Step
- Submit Student

Use required-field indicators and validation messages.

 7. Student Profile / Details Screen

Create a detailed student profile page.

Profile header:
- Student photo.
- Student name.
- Student ID.
- Contact information.
- Registration date.
- Assigned counsellor.
- Current application status.

Action buttons:
- Edit Profile.
- Change Status.
- Delete Student.
- Add Follow-up.

Create tabs:

Tab 1 – Overview
- Personal details.
- Academic summary.
- English proficiency summary.
- Preferred countries.
- Application status.
- Counsellor remarks.

Tab 2 – Academic Records
- Qualification.
- Institution.
- Faculty.
- GPA / Percentage.
- Passed year.
- Study gap.
- Backlogs.

Tab 3 – English Proficiency
- Test type.
- Overall score.
- Individual section scores.
- Test date.
- Test status.

Tab 4 – Study Preferences
- Primary preferred country.
- Other preferred countries.
- Course.
- Study level.
- Preferred intake.
- Budget.
- Funding source.

Tab 5 – Applications
- Applied country.
- University.
- Course.
- Intake.
- Application date.
- Admission status.
- Visa status.

Tab 6 – Documents
- Passport.
- Academic certificates.
- Transcript.
- English test certificate.
- CV.
- Offer letter.
- Other documents.

Tab 7 – Activity History
- Student created.
- Information updated.
- Status changed.
- Documents uploaded.
- Counselling notes.
- Follow-up history.

 8. Application Management Screen

Create a dedicated application tracking module.

Display applications in a table or Kanban board.

Application fields:
- Student.
- Country.
- University.
- Course.
- Study Level.
- Intake.
- Application Date.
- Admission Status.
- Visa Status.
- Assigned Counsellor.

Admission statuses:
- Not Started
- Preparing Documents
- Applying
- Submitted
- Under Review
- Offer Received
- Conditional Offer
- Unconditional Offer
- Rejected
- Withdrawn

Visa statuses:
- Not Started
- Preparing Documents
- Applied
- Under Processing
- Approved
- Rejected
- Withdrawn

Important: Admission status and visa status must be separate.

 9. Other Management Screens

Countries
- Country name.
- Country flag.
- Available study levels.
- Description.
- Active / Inactive.

Universities
- University name.
- Country.
- Location.
- Website.
- Available courses.
- Available intakes.

Counsellors
- Name.
- Email.
- Phone.
- Assigned students.
- Active status.

Follow-ups
- Student name.
- Follow-up date.
- Purpose.
- Notes.
- Assigned counsellor.
- Pending / Completed.

Reports
- Total students.
- Students by country.
- Students by education level.
- Students by English test.
- Applications by status.
- Approved and rejected applications.
- Registration trends.
- Export PDF / CSV.

Settings
- Admin profile.
- User management.
- Roles and permissions.
- System preferences.

 10. Important UI Requirements

- Maintain consistent navigation across every screen.
- Use reusable buttons, forms, cards, tables and modals.
- Use status badges with consistent colors.
- Provide confirmation before deleting records.
- Use realistic sample data.
- Include empty, loading, success and error states.
- Ensure forms are easy to use.
- Use responsive layouts for desktop, tablet and mobile.
- Use accessible color contrast.
- Do not overload the dashboard.
- Use realistic student names and data.
- Keep the design professional and suitable for a real education consultancy.

 11. Expected Figma Deliverables

Generate the following connected screens:

1. Login Screen
2. Dashboard
3. Student Listing
4. Add Student – Personal Information
5. Add Student – Academic Information
6. Add Student – English Proficiency
7. Add Student – Study Preferences
8. Student Profile – Overview
9. Student Profile – Academic Records
10. Student Profile – English Test
11. Student Profile – Applications
12. Student Profile – Documents
13. Application Management
14. Application Details
15. Country Management
16. University Management
17. Counsellor Management
18. Follow-up Management
19. Reports and Analytics
20. Settings and User Management

Create a consistent design system and reusable components.

Use Auto Layout, organized layers, meaningful component names and consistent spacing.

Connect the main screens through clickable prototype interactions, including sidebar navigation, Add Student, View Student, Edit Student, profile tabs and application management.

Final design objective: Deliver a premium, professional and practical Education Consultancy CRM dashboard that can be presented to a real client and subsequently implemented as a full-stack web application.