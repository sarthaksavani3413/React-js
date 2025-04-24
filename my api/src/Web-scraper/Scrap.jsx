export const MenuList = ({ items }) => {
  console.log(MenuList,"menulist")
  return (
    <ul style={{ paddingLeft: '20px' }}>
      {items?.map((item, index) => {
        if (typeof item === 'string') {
          return <li key={index}>{item}</li>;
        }

        if (typeof item === 'object' && !Array.isArray(item)) {
          return Object.entries(item).map(([key, value]) => (
            <li key={key + index}>
              <strong>{key}</strong>
              {Array.isArray(value) ? (
                <MenuList items={value} />
              ) : (
                <ul>
                  {Object.entries(value).map(([k, v], i) => (
                    <li key={k + i}>
                      <strong>{k}</strong>
                      {Array.isArray(v) ? (
                        <MenuList items={v} />
                      ) : (
                        <span> - {v}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ));
        }

        return null;
      })}
    </ul>
  );
};
