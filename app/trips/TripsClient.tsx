"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

import { SafeReservation, SafeUser } from "../types";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("예약 취소됨");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="여행" subtitle="어디에서 지내고 어디로 갈 건가요" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="예약 취소"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
