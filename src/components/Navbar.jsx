function Navbar() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      
      <div>
        <img src="/gdg-favicon.svg" alt="로고" width="100" />
      </div>

      {/* 1. 필터링 및 관리자 버튼들 */}
      <div style={{ margin: '15px 0' }}>
        <button>카테고리 필터링</button>
        <button>가격 범위 필터링</button>
        <button>상품 정렬</button>
        <button>관리자</button>
      </div>

      {/* 2. 검색 영역 */}
      <div>
        <input type="text" placeholder="상품 검색..." />
        <button>검색</button>
      </div>
    </header>
  );
}

export default Navbar;