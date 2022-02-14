import { useMemo, useState } from 'react';

type IUseSelectProps<T> = {
  initialState?: T | null;
  activeKey?: string;
  onActiveClick?: (value?: T) => void
};

export const useSelect = <T>({
  initialState = null,
  activeKey,
  onActiveClick,
}: IUseSelectProps<T>) => {
  const [selectedElement, setSelectedElement] = useState(initialState);

  const register = (value: T) => {
    const isActive = selectedElement === value;

    const onClick = () => {
      if (isActive) {
        onActiveClick?.(value);
      } else {
        setSelectedElement(value);
      }
    };

    const selectThis = () => {
      setSelectedElement(value);
    };

    return {
      onClick,
      selectThis,
      ...(activeKey ? { [activeKey]: isActive } : {}),
    } as const;
  };

  const isSelected = useMemo(() => selectedElement !== null, [selectedElement]);

  return {
    selectedElement,
    register,
    isSelected,
    selectElement: setSelectedElement,
  };
};
