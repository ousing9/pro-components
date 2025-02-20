import React from 'react';
import type { FormItemProps } from 'antd';
import type { NamePath } from 'antd/lib/form/interface';
import type { ProFieldValueType, SearchTransformKeyFn } from '@ant-design/pro-utils';
import type { GroupProps, FieldProps } from './interface';
import type { ProFormInstance } from '.';

export type FiledContextProps = {
  fieldProps?: FieldProps;
  formItemProps?: FormItemProps;
  groupProps?: GroupProps;
  setFieldValueType?: (
    name: NamePath,
    obj: {
      valueType?: ProFieldValueType;
      dateFormat?: string;
      /** 数据转化的地方 */
      transform?: SearchTransformKeyFn;
    },
  ) => void;
  formRef?: React.MutableRefObject<ProFormInstance>;
};

const FieldContext = React.createContext<FiledContextProps>({});

export default FieldContext;
