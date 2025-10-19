import mongoose from 'mongoose';

const userWorkDetailsSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  company_name: { type: String, required: true },
  company_address: { type: String },
  company_contact_number: { type: String },
  company_email: { type: String },
  company_site: { type: String },
  company_logo: { type: String },
  work_experience: [
    {
      designation: { type: String },
      location: { type: String },
      start_month: { type: String },
      start_year: { type: String },
      end_month: { type: String },
      end_year: { type: String },
      experience: { type: String }
    }
  ],
  certifications: [
    {
      title: { type: String },
      description: { type: String },
      received_month: { type: String },
      received_year: { type: String }, // fixed to avoid JS property issue
      expiration_month: { type: String },
      expiration_year: { type: String },
      links: [{ type: String }]
    }
  ]
});

export default mongoose.model('UserWorkDetails', userWorkDetailsSchema, 'user_work_details');
