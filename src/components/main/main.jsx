import React from 'react';
import InputSection from '../sections/input-section/input-section';
import NumbersSection from '../sections/numbers-section/numbers-section';
import OtherSection from '../sections/other-section/other-section';
import SymbolsSection from '../sections/symbols-section/symbols-section';

function Main() {
  return (
    <main className="main">
      <InputSection />
      <SymbolsSection />
      <NumbersSection />
      <OtherSection />
    </main>
  );
}

export default Main;
