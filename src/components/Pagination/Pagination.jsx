export default function Pagination({
  previousPage,
  nextPage,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      return previousPage;
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      return nextPage;
    }
  };
  return (
    <section>
      <button onClick={handlePreviousPage}>Previous</button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage}>Next</button>
    </section>
  );
}
