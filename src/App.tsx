import React, { useState } from 'react';
import { BannerCanvas } from './components/BannerCanvas';
import { ConceptModal } from './components/ConceptModal';
import { BackgroundAnimation } from './components/BackgroundAnimation';

export default function App() {
  const [isConceptOpen, setIsConceptOpen] = useState<boolean>(false);

  const handleOpenContact = () => {
    window.open('https://wa.me/?text=Ol%C3%A1!%20Gostaria%20de%20um%20site%20interativo%20de%20alto%20padr%C3%A3o.', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-['DM_Sans'] selection:bg-white selection:text-black">
      {/* Background Image Sequence Animation */}
      <BackgroundAnimation />

      {/* Main Content Area overlaying the background */}
      <main className="flex-1 w-full flex flex-col items-center justify-start relative z-10 overflow-x-hidden">
        <BannerCanvas
          onOpenConcept={() => setIsConceptOpen(true)}
          onOpenContact={handleOpenContact}
        />
      </main>

      <ConceptModal
        isOpen={isConceptOpen}
        onClose={() => setIsConceptOpen(false)}
        onContactClick={handleOpenContact}
      />
    </div>
  );
}
