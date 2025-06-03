
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
      <p className="text-slate-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        {testimonial.imageUrl && (
          <img 
            src={testimonial.imageUrl} 
            alt={testimonial.author} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-secondary">{testimonial.author}</p>
          <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
