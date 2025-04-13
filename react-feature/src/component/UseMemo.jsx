import React, { useState, useMemo } from 'react';

const UseMemo = ({ items }) => {
  const [query, setQuery] = useState('');

  // useMemo to avoid recalculating filteredItems on every render
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]); // only re-run when items or query changes

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
