export enum AbsenceRequestStatus {
  INITIAL,
  PENDING,
  APPROVED,
  REJECTED
}

export function toString(absenceRequestStatus: string): string {

  switch (absenceRequestStatus) {

    case "INITIAL":
      return "Initial";

    case "PENDING":
      return "En attente";

    case "APPROVED":
      return "Approuvé";

    case "REJECTED":
      return "Rejeté";

  }

  return "";
}
