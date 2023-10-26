import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetApiKeyMutation } from 'src/services/userService';
import { useToast } from 'src/utils/hooks';

interface ApiKeyGenerate {
  apiKey: string;
}

const GenerateApiKey = ({ data }: { data: ApiKeyGenerate }): JSX.Element => {
  const { notify } = useToast();

  const [inputValues, setInputValues] = useState<ApiKeyGenerate>({
    apiKey: data.apiKey
  });

  useEffect(() => {
    setInputValues({
      ...inputValues,
      apiKey: data?.apiKey
    });
  }, [data]);

  const [GetApiKey, { isLoading: isLoadingUpdate }] = useGetApiKeyMutation();

  const generateApiKey = async () => {
    try {
      const { token } = (await GetApiKey({}).unwrap()) as { token: string };
      setInputValues({
        ...inputValues,
        apiKey: token
      });
      notify({ message: 'New API Key has been generated' });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <TextField
          sx={{ width: '80%' }}
          name="apiKey"
          label="API KEY"
          required
          autoComplete="off"
          value={inputValues?.apiKey || ''}
        />
        <LoadingButton
          loading={isLoadingUpdate}
          variant="outlined"
          sx={{ marginLeft: 2, padding: 1.5 }}
          onClick={generateApiKey}
        >
          {'Generate'}
        </LoadingButton>
      </div>
    </>
  );
};

export default GenerateApiKey;
