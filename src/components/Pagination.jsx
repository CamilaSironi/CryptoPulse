
export default function Pagination ({ 
  currentPage, 
  isLastPage,
  onPageChange, 
  disabled 
}) {
    
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      
      <button
        disabled={disabled || currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>

      <span>
        Página {currentPage}
      </span>

      <button
        disabled={disabled || isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  )
}