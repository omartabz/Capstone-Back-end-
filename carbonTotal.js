export function carbonTotal(availableCredits, issuedCredits) {
    const remainingCredits = availableCredits - issuedCredits;
    return remainingCredits;
  }