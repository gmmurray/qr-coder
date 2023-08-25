import { ActionIcon, TextInput } from '@mantine/core';

import { IconCheck } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { validateInput } from './helpers/validateInput';

type Props = {
  onSave: (value: string) => any;
};
export default function Form({ onSave }: Props) {
  const form = useForm({
    initialValues: {
      url: '',
    },
    validate: {
      url: value =>
        validateInput(value) ? undefined : 'Please enter a valid URL',
    },
  });
  return (
    <form onSubmit={form.onSubmit(({ url }) => onSave(url))}>
      <TextInput
        label="Your url"
        placeholder="example.com"
        rightSection={
          <ActionIcon
            variant="gradient"
            gradient={{ from: 'indigo', to: 'violet' }}
            type="submit"
          >
            <IconCheck />
          </ActionIcon>
        }
        {...form.getInputProps('url')}
      />
    </form>
  );
}
